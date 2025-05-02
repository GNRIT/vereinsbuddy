import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }*/

    if (req.method === 'GET') {
        try {
        const lehrgang = await db2.lehrgang.findUnique({
            where: {
            ID: parseInt(id),
            }
        })

        if (!lehrgang) {
            return res.status(404).json({ message: 'Lehrgang nicht gefunden' })
        }

        res.status(200).json(lehrgang)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Lehrgangs', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Abk_rzung, Beschreibung, Reihenfolge } = req.body

        const updatedLehrgang = await db2.lehrgang.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            Abk_rzung,
            Beschreibung,
            Reihenfolge,
            Geaendert_am: new Date(),
            }
        })

        res.status(200).json(updatedLehrgang)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren des Lehrgangs', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await db2.lehrgang.delete({
            where: {
            ID: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen des Lehrgangs', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}