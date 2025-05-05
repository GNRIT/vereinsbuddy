import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }*/

    if (req.method === 'GET') {
        try {
        const einteilungen = await db2.einteilung.findMany({
            include: {
            einsatz: true,
            dienstabend: true,
            ff_mitglied: true,
            fahrzeug: true,
            einheit: true,
            },
            orderBy: {
            ID: 'desc',
            },
        })
        res.status(200).json(einteilungen)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Einteilungen', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Einsatz_ID, Dienstabend_ID, Fahrzeug_ID, FF_Mitglied_ID, Einheit_ID } = req.body

        // Validierung
        if (!FF_Mitglied_ID) {
            return res.status(400).json({ message: 'Mitglied ist erforderlich' })
        }

        const neueEinteilung = await db2.einteilung.create({
            data: {
            Einsatz_ID: parseInt(Einsatz_ID),
            Dienstabend_ID: parseInt(Dienstabend_ID),
            Fahrzeug_ID: parseInt(Fahrzeug_ID),
            FF_Mitglied_ID: parseInt(FF_Mitglied_ID),
            Einheit_ID: parseInt(Einheit_ID),
            }
        })

        res.status(201).json(neueEinteilung)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen der Einteilung', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}