import { getSession } from 'next-auth/react'
import { vereinsbuddyPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const mitglieder = await prisma.person.findMany({
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
        const { Vorname, Name, Geburtsdatum, Strasse, Hausnummer, Postleitzahl, Ort, Email, HandyNr, Rolle } = req.body

        // Erstelle zuerst die Person
        const neuePerson = await prisma.person.create({
            data: {
            Vorname,
            Name,
            Geburtsdatum: Geburtsdatum ? new Date(Geburtsdatum) : null,
            Strasse,
            Hausnummer,
            Postleitzahl,
            Ort,
            Email,
            HandyNr,
            Erstellt_am: new Date(),
            }
        })

        // Dann die Vereinszuordnung (hier mit dem ersten Verein, könnte erweitert werden)
        const verein = await prisma.verein.findFirst()
        
        if (verein) {
            await prisma.vereinszuordnung.create({
            data: {
                Person_ID: neuePerson.id,
                Verein_ID: verein.id,
                Rolle,
                Erstellt_am: new Date(),
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