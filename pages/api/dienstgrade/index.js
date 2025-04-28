import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
export default async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const dienstgrade = await db2.dienstgrad.findMany({
            orderBy: {
            Abkuerzung_maennlich: 'asc',
            },
        })
        res.status(200).json(dienstgrade)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Dienstgrade', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { 
            Abkuerzung_maennlich, 
            Beschreibung_maennlich, 
            Abkuerzung_weiblich, 
            Beschreibung_weiblich 
        } = req.body

        const neuerDienstgrad = await db2.dienstgrad.create({
            data: {
            Abkuerzung_maennlich,
            Beschreibung_maennlich,
            Abkuerzung_weiblich,
            Beschreibung_weiblich,
            Erstellt_am: new Date(),
            }
        })

        res.status(201).json(neuerDienstgrad)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen des Dienstgrads', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}