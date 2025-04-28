import { vereinDbPrisma as db2 } from '@/lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
        const einheiten = await db2.einheit.findMany()
        res.status(200).json(einheiten)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Einheiten', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Abkuerzung, Beschreibung } = req.body

        const neueEinheit = await db2.einheit.create({
            data: {
            Abkuerzung,
            Beschreibung,
            Erstellt_am: new Date(),
            }
        })

        res.status(201).json(neueEinheit)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen der Einheit', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}