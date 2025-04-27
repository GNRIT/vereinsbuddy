import { getSession } from 'next-auth/react'
import { vereinDbPrisma as prisma } from '../../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const einteilungen = await prisma.einteilung.findMany({
            where: {
            Fahrzeug_ID: parseInt(id),
            },
            include: {
            Einsatz: true,
            },
            orderBy: {
            Einsatz: {
                StartDatum: 'desc',
            },
            },
        })

        res.status(200).json(einteilungen)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Einteilungen', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { einsatzId } = req.body

        // Prüfen ob das Fahrzeug verfügbar ist
        const fahrzeug = await prisma.fahrzeug.findUnique({
            where: {
            id: parseInt(id),
            },
        })

        if (fahrzeug.Status !== 'verfuegbar') {
            return res.status(400).json({ message: 'Fahrzeug ist nicht verfügbar' })
        }

        // Einteilung erstellen
        const einteilung = await prisma.einteilung.create({
            data: {
            Einsatz_ID: parseInt(einsatzId),
            Fahrzeug_ID: parseInt(id),
            Erstellt_am: new Date(),
            },
        })

        // Fahrzeugstatus aktualisieren
        await prisma.fahrzeug.update({
            where: {
            id: parseInt(id),
            },
            data: {
            Status: 'im_einsatz',
            Geaendert_am: new Date(),
            },
        })

        res.status(201).json(einteilung)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen der Einteilung', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        const { einteilungId } = req.body

        // Einteilung löschen
        await prisma.einteilung.delete({
            where: {
            id: parseInt(einteilungId),
            },
        })

        // Prüfen ob noch andere Einteilungen existieren
        const verbleibendeEinteilungen = await prisma.einteilung.count({
            where: {
            Fahrzeug_ID: parseInt(id),
            },
        })

        // Fahrzeugstatus aktualisieren falls keine Einteilungen mehr
        if (verbleibendeEinteilungen === 0) {
            await prisma.fahrzeug.update({
            where: {
                id: parseInt(id),
            },
            data: {
                Status: 'verfuegbar',
                Geaendert_am: new Date(),
            },
            })
        }

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen der Einteilung', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}