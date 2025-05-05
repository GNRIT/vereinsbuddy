import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }*/

    if (req.method === 'GET') {
        try {
        const logins = await db2.mitglied_login.findMany({
            orderBy: {
            Erstellt_am: 'desc',
            },
        })
        res.status(200).json(logins)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Mitglied-Logins', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Benutzer_ID, Mitglied_ID, Typ, Erstellt_am } = req.body

        const neuesLogin = await db2.mitglied_login.create({
            data: {
            Benutzer_ID: parseInt(Benutzer_ID),
            Mitglied_ID: parseInt(Mitglied_ID),
            Typ,
            Erstellt_am: new Date(Erstellt_am),
            }
        })

        res.status(201).json(neuesLogin)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen des Mitglied-Logins', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}