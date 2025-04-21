import { getSession } from 'next-auth/react'
import { vereinsbuddyPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const mitglied = await prisma.person.findUnique({
            where: {
            id: parseInt(id),
            },
            include: {
            Vereinszuordnung: {
                include: {
                Verein: true
                }
            }
            }
        })

        if (!mitglied) {
            return res.status(404).json({ message: 'Mitglied nicht gefunden' })
        }

        res.status(200).json(mitglied)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Mitglieds', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Vorname, Name, Geburtsdatum, Strasse, Hausnummer, Postleitzahl, Ort, Email, HandyNr, Rolle } = req.body

        // Aktualisiere die Person
        const updatedPerson = await prisma.person.update({
            where: {
            id: parseInt(id),
            },
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
            Geaendert_am: new Date(),
            }
        })

        // Aktualisiere die Vereinszuordnung (falls vorhanden)
        const existingZuordnung = await prisma.vereinszuordnung.findFirst({
            where: {
            Person_ID: parseInt(id),
            }
        })

        if (existingZuordnung) {
            await prisma.vereinszuordnung.update({
            where: {
                id: existingZuordnung.id,
            },
            data: {
                Rolle,
                Geaendert_am: new Date(),
            }
            })
        }

        res.status(200).json(updatedPerson)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren des Mitglieds', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        // Lösche zuerst die Vereinszuordnung
        await prisma.vereinszuordnung.deleteMany({
            where: {
            Person_ID: parseInt(id),
            }
        })

        // Dann die Person
        await prisma.person.delete({
            where: {
            id: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen des Mitglieds', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}