import { getSession } from 'next-auth/react'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const zuordnung = await prisma.mitglied_funktionen.findUnique({
            where: {
            ID: parseInt(id),
            },
            include: {
            ff_mitglied: {
                select: {
                Vorname: true,
                Name: true
                }
            },
            funktion_ff: {
                select: {
                Name: true
                }
            }
            }
        })

        if (!zuordnung) {
            return res.status(404).json({ message: 'Zuordnung nicht gefunden' })
        }

        res.status(200).json(zuordnung)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Zuordnung', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Mitglied_ID, Funktion_ID, Typ, Geaendert_am } = req.body

        const updatedZuordnung = await prisma.mitglied_funktionen.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            Mitglied_ID: parseInt(Mitglied_ID),
            Funktion_ID: parseInt(Funktion_ID),
            Typ,
            Geaendert_am: new Date(Geaendert_am),
            }
        })

        res.status(200).json(updatedZuordnung)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren der Zuordnung', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await prisma.mitglied_funktionen.delete({
            where: {
            ID: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen der Zuordnung', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}