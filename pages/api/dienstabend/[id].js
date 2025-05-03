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
        const dienstabend = await db2.dientsabend.findUnique({
            where: {
            ID: parseInt(id),
            }
        })

        if (!dienstabend) {
            return res.status(404).json({ message: 'Dienstabend nicht gefunden' })
        }

        res.status(200).json(dienstabend)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Dienstabends', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Datum, Thema } = req.body

        const updatedDienstabend = await db2.dientsabend.update({
            where: {
            ID: parseInt(id)
            },
            data: {
            Datum: new Date(Datum),
            Thema,
            Geaendert_am: new Date()
            }
        })

        res.status(200).json(updatedDienstabend)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren des Dienstabends', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await db2.dientsabend.delete({
            where: {
            ID: parseInt(id)
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen des Dienstabends', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}