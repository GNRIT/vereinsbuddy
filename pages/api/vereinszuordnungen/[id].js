import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';

export default async function handler(req, res) {
    const { id } = req.query

    if (req.method === 'GET') {
        try {
        const zuordnung = await db1.vereinszuordnung.findUnique({
            where: { ID: parseInt(id) },
            include: { person: true, verein: true }
        })
        if (!zuordnung) return res.status(404).json({ message: 'Zuordnung nicht gefunden' })
        res.status(200).json(zuordnung)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen', error: error.message })
        }
    }
    else if (req.method === 'PUT') {
        try {
        const { person_id, verein_id, rolle } = req.body
        const updated = await db1.vereinszuordnung.update({
            where: { ID: parseInt(id) },
            data: {
            Person_ID: parseInt(person_id),
            Verein_ID: parseInt(verein_id),
            Rolle: rolle,
            Erstellt_am: new Date(),
            Geaendert_am: new Date()
            }
        })
        res.status(200).json(updated)
        } catch (error) {
        res.status(400).json({ message: 'Update fehlgeschlagen', error: error.message })
        }
    }
    else if (req.method === 'DELETE') {
        try {
        await db1.vereinszuordnung.delete({ where: { ID: parseInt(id) } })
        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Löschen fehlgeschlagen', error: error.message })
        }
    }
    else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${req.method} not allowed`)
    }
}
