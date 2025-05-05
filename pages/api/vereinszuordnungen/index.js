import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
export default async function handler(req, res) {
    const session = await getSession({ req })

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }*/

    if (req.method === 'GET') {
        try {
        const zuordnungen = await db1.vereinszuordnung.findMany({
            include: {
            person: true,
            verein: true,
            }
        })
        res.status(200).json(zuordnungen)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Vereinszuordnungen', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Person_ID, Verein_ID, Rolle } = req.body

        // Prüfen ob die Zuordnung bereits existiert
        const existierendeZuordnung = await db1.vereinszuordnung.findFirst({
            where: {
            Person_ID: parseInt(Person_ID),
            Verein_ID: parseInt(Verein_ID),
            },
        })

        if (existierendeZuordnung) {
            return res.status(400).json({ message: 'Diese Zuordnung existiert bereits' })
        }

        const neueZuordnung = await db1.vereinszuordnung.create({
            data: {
            Person_ID: parseInt(Person_ID),
            Verein_ID: parseInt(Verein_ID),
            Rolle,
            Erstellt_am: new Date(),
            Geaendert_am: new Date(),
            },
        })

        res.status(201).json(neueZuordnung)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen der Vereinszuordnung', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}