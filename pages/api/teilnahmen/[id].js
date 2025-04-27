import { getSession } from 'next-auth/react'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const teilnahme = await prisma.teilnahme.findUnique({
            where: {
            ID: parseInt(id),
            },
            include: {
            mitglied: true,
            veranstaltung: true
            }
        })

        if (!teilnahme) {
            return res.status(404).json({ message: 'Teilnahme nicht gefunden' })
        }

        res.status(200).json(teilnahme)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Teilnahme', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Mitglied_ID, Veranstaltung_ID, Typ, Geaendert_am } = req.body

        const updatedTeilnahme = await prisma.teilnahme.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            Mitglied_ID: parseInt(Mitglied_ID),
            Veranstaltung_ID: parseInt(Veranstaltung_ID),
            Typ,
            Geaendert_am: new Date(Geaendert_am),
            },
            include: {
            mitglied: true,
            veranstaltung: true
            }
        })

        res.status(200).json(updatedTeilnahme)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren der Teilnahme', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await prisma.teilnahme.delete({
            where: {
            ID: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen der Teilnahme', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}