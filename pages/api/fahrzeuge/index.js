import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const fahrzeuge = await db2.fahrzeug.findMany({
            orderBy: {
            Kennzeichen: 'asc',
            },
        })
        res.status(200).json(fahrzeuge)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Fahrzeuge', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Kennzeichen, Fahrzeugtyp, Besatzungsstaerke, Status } = req.body

        const neuesFahrzeug = await db2.fahrzeug.create({
            data: {
            Kennzeichen,
            Fahrzeugtyp,
            Besatzungsstaerke,
            Status,
            Erstellt_am: new Date(),
            }
        })

        res.status(201).json(neuesFahrzeug)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen des Fahrzeugs', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}