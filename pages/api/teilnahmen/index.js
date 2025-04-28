import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const teilnahmen = await db2.teilnahme.findMany({
            include: {
            mitglied: true,
            veranstaltung: true
            },
            orderBy: {
            Erstellt_am: 'desc',
            },
        })
        res.status(200).json(teilnahmen)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Teilnahmen', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Mitglied_ID, Veranstaltung_ID, Typ, Erstellt_am } = req.body

        // Prüfen ob Teilnahme bereits existiert
        const existierendeTeilnahme = await db2.teilnahme.findFirst({
            where: {
            Mitglied_ID: parseInt(Mitglied_ID),
            Veranstaltung_ID: parseInt(Veranstaltung_ID),
            }
        })

        if (existierendeTeilnahme) {
            return res.status(400).json({ message: 'Teilnahme existiert bereits' })
        }

        const neueTeilnahme = await db2.teilnahme.create({
            data: {
            Mitglied_ID: parseInt(Mitglied_ID),
            Veranstaltung_ID: parseInt(Veranstaltung_ID),
            Typ,
            Erstellt_am: new Date(Erstellt_am),
            },
            include: {
            mitglied: true,
            veranstaltung: true
            }
        })

        res.status(201).json(neueTeilnahme)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen der Teilnahme', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}