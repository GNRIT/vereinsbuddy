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
        const allergie = await db2.allergie.findUnique({
            where: {
            ID: parseInt(id),
            },
            include: {
            ff_mitglied: true,
            jf_mitglied: true
            }
        })

        if (!allergie) {
            return res.status(404).json({ message: 'Allergie nicht gefunden' })
        }

        res.status(200).json(allergie)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Allergie', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { FF_Mitglied_ID, JF_Mitglied_ID, Allergie, Beschreibung } = req.body

        const updatedAllergie = await db2.allergie.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            FF_Mitglied_ID: parseInt(FF_Mitglied_ID),
            JF_Mitglied_ID: JF_Mitglied_ID ? parseInt(JF_Mitglied_ID) : null,
            Allergie,
            Beschreibung,
            Geaendert_am: new Date()
            }
        })

        res.status(200).json(updatedAllergie)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren der Allergie', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await db2.allergie.delete({
            where: {
            id: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen der Allergie', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}