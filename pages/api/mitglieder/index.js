import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';


export default async function handler(req, res) {
    const session = await getSession({ req })

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }*/

    if (req.method === 'GET') {
        try {
        const mitglieder = await db1.person.findMany({
            include: {
            Vereinszuordnung: {
                include: {
                Verein: true
                }
            }
            }
        })
        res.status(200).json(mitglieder)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Mitglieder', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Vorname, Name, Geburtsdatum, Strasse, Hausnummer, Postleitzahl, Ort, Email, Handynr, Rolle } = req.body

        // Erstelle zuerst die Person
        const neuePerson = await db1.person.create({
            data: {
            Vorname,
            Name,
            Geburtsdatum: Geburtsdatum ? new Date(Geburtsdatum) : null,
            Strasse,
            Hausnummer,
            Postleitzahl,
            Ort,
            Email,
            Handynr,
            Erstellt_am: new Date(),
            Geaendert_am: new Date(),
            }
        })

        // Dann die Vereinszuordnung (hier mit dem ersten Verein, könnte erweitert werden)
        const verein = await db1.verein.findFirst()
        
        if (verein) {
            await db1.vereinszuordnung.create({
            data: {
                Person_ID: neuePerson.ID,
                Verein_ID: verein.ID,
                Rolle,
                Erstellt_am: new Date(),
                Geaendert_am: new Date(),
            }
            })
        }

        res.status(201).json(neuePerson)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen des Mitglieds', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}