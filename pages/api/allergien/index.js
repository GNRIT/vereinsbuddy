import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }*/

    if (req.method === 'GET') {
        try {
        const allergien = await db2.allergie.findMany({
            include: {
            ff_mitglied: true,
            jf_mitglied: true
            },
            orderBy: {
            Allergie: 'asc'
            }
        })
        res.status(200).json(allergien)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Allergien', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { FF_Mitglied_ID, JF_Mitglied_ID, Allergie, Beschreibung } = req.body

        const neueAllergie = await db2.allergie.create({
            data: {
            FF_Mitglied_ID: parseInt(FF_Mitglied_ID),
            JF_Mitglied_ID: JF_Mitglied_ID ? parseInt(JF_Mitglied_ID) : null,
            Allergie,
            Beschreibung,
            Erstellt_am: new Date()
            }
        })

        res.status(201).json(neueAllergie)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen der Allergie', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}