import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const login = await db2.mitglied_login.findUnique({
            where: {
            ID: parseInt(id),
            }
        })

        if (!login) {
            return res.status(404).json({ message: 'Mitglied-Login nicht gefunden' })
        }

        res.status(200).json(login)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Mitglied-Logins', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Benutzer_ID, Mitglied_ID, Typ, Geaendert_am } = req.body

        const updatedLogin = await db2.mitglied_login.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            Benutzer_ID: parseInt(Benutzer_ID),
            Mitglied_ID: parseInt(Mitglied_ID),
            Typ,
            Geaendert_am: new Date(Geaendert_am),
            }
        })

        res.status(200).json(updatedLogin)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren des Mitglied-Logins', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await db2.mitglied_login.delete({
            where: {
            ID: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen des Mitglied-Logins', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}