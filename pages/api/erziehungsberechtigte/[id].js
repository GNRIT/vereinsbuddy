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
        const eintrag = await db2.jf_erziehungsberechtigter.findUnique({
            where: { ID: parseInt(id) },
            include: {
            jf_mitglied: true,
            person: true
            }
        })
        
        if (!eintrag) return res.status(404).json({ message: 'Nicht gefunden' })
        
        res.status(200).json(eintrag)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { JF_Mitglied_ID, Person_ID } = req.body

        const updated = await db2.jf_erziehungsberechtigter.update({
            where: { ID: parseInt(id) },
            data: {
            JF_Mitglied_ID: parseInt(JF_Mitglied_ID),
            Person_ID: parseInt(Person_ID),
            Geaendert_am: new Date()
            }
        })

        res.status(200).json(updated)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await db2.jf_erziehungsberechtigter.delete({
            where: { ID: parseInt(id) }
        })
        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}