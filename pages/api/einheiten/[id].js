import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const { id } = req.query

    if (req.method === 'GET') {
        try {
        const einheit = await prisma.einheit.findUnique({
            where: {
            ID: parseInt(id),
            },
            include: {
            einteilung: true
            }
        })

        if (!einheit) {
            return res.status(404).json({ message: 'Einheit nicht gefunden' })
        }

        res.status(200).json(einheit)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Einheit', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Abkuerzung, Beschreibung } = req.body

        const updatedEinheit = await prisma.einheit.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            Abkuerzung,
            Beschreibung,
            Geaendert_am: new Date(),
            }
        })

        res.status(200).json(updatedEinheit)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren der Einheit', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        // Zuerst alle Einteilungen löschen
        await prisma.einteilung.deleteMany({
            where: {
            Einheit_ID: parseInt(id),
            }
        })

        // Dann die Einheit selbst löschen
        await prisma.einheit.delete({
            where: {
            ID: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen der Einheit', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}