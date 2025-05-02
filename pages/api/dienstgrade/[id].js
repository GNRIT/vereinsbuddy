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
        const dienstgrad = await db2.dienstgrad.findUnique({
            where: {
            ID: parseInt(id),
            }
        })

        if (!dienstgrad) {
            return res.status(404).json({ message: 'Dienstgrad nicht gefunden' })
        }

        res.status(200).json(dienstgrad)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Dienstgrads', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { 
            Abkuerzung_maennlich, 
            Beschreibung_maennlich, 
            Abkuerzung_weiblich, 
            Beschreibung_weiblich 
        } = req.body

        const updatedDienstgrad = await db2.dienstgrad.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            Abkuerzung_maennlich,
            Beschreibung_maennlich,
            Abkuerzung_weiblich,
            Beschreibung_weiblich,
            Geaendert_am: new Date(),
            }
        })

        res.status(200).json(updatedDienstgrad)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren des Dienstgrads', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await db2.dienstgrad.delete({
            where: {
            ID: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen des Dienstgrads', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}