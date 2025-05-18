import { vereinDbPrisma as db2 } from '@/lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
    // Optional: Authentifizierung prüfen
    const session = await getSession({ req })

    /*
    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }
    */

    switch (req.method) {
        case 'GET':
        return await handleGet(req, res)
        case 'POST':
        return await handlePost(req, res)
        default:
        res.setHeader('Allow', ['GET', 'POST'])
        return res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
    }

    async function handleGet(req, res) {
    try {
        const mitglieder = await db2.ff_mitglied.findMany({
        orderBy: {
            ID: 'asc'
        },
        select: {
            ID: true,
            Person_ID: true
        }
        })

        res.status(200).json({ data: mitglieder }) // Wichtig: Daten in "data" verpacken
    } catch (error) {
        console.error('Fehler beim Abrufen der Mitglieder:', error)
        res.status(500).json({ message: 'Fehler beim Abrufen der Mitglieder', error: error.message })
    }
    }

    async function handlePost(req, res) {
    try {
        const {
        Person_ID,
        Eintrittsdatum,
        Austrittsdatum,
        Aufnahmedatum,
        Status,
        Erstellt_am,
        Geaendert_am
        } = req.body

        // 🔒 Validierung
        if (!Person_ID || isNaN(Person_ID)) {
        return res.status(400).json({ message: 'Ungültige Person_ID' })
        }

        if (!Status || (Status !== 'aktiv' && Status !== 'inaktiv')) {
        return res.status(400).json({ message: 'Ungültiger Status (muss "aktiv" oder "inaktiv" sein)' })
        }

        const neuesMitglied = await db2.ff_mitglied.create({
        data: {
            Person_ID: Number(Person_ID),
            Eintrittsdatum: parseDate(Eintrittsdatum) || new Date(),
            Austrittsdatum: parseDate(Austrittsdatum),
            Aufnahmedatum: parseDate(Aufnahmedatum),
            Status,
            Erstellt_am: parseDate(Erstellt_am) || new Date(),
            Geaendert_am: parseDate(Geaendert_am) || new Date()
        }
        })

        res.status(201).json(neuesMitglied)
    } catch (error) {
        console.error('Fehler beim Erstellen des Mitglieds:', error)
        res.status(500).json({
        message: 'Serverfehler beim Erstellen des Mitglieds',
        error: error.message,
        details: error.meta || null
        })
    }
    }

    function parseDate(dateString) {
    if (!dateString) return null
    const parsed = new Date(dateString)
    return isNaN(parsed) ? null : parsed
}
