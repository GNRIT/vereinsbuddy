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
        const funktion = await db2.funktion_jf.findUnique({
            where: {
            ID: parseInt(id),
            }
        })

        if (!funktion) {
            return res.status(404).json({ message: 'funktion_jf nicht gefunden' })
        }

        res.status(200).json(funktion)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der funktion_jf', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Name, Ist_Admin, Geaendert_am } = req.body

        const updatedFunktion = await db2.funktion_jf.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            Name,
            Ist_Admin,
            Geaendert_am: new Date(Geaendert_am),
            }
        })

        res.status(200).json(updatedFunktion)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren der funktion_jf', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await db2.funktion_jf.delete({
            where: {
            ID: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen der funktion_jf', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}