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
        const einteilung = await db2.einteilung.findUnique({
            where: {
            ID: parseInt(id),
            },
            include: {
            einsatz: true,
            dienstabend: true,
            ff_mitglied: true,
            fahrzeug: true,
            einheit: true,
            }
        })

        if (!einteilung) {
            return res.status(404).json({ message: 'Einteilung nicht gefunden' })
        }

        res.status(200).json(einteilung)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Einteilung', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Einsatz_ID, Dienstabend_ID, Fahrzeug_ID, FF_Mitglied_ID, Einheit_ID } = req.body

        // Validierung
        if (!FF_Mitglied_ID) {
            return res.status(400).json({ message: 'Mitglied ist erforderlich' })
        }

        const updatedEinteilung = await db2.einteilung.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            Einsatz_ID: Einsatz_ID || null,
            Dienstabend_ID: Dienstabend_ID || null,
            Fahrzeug_ID: Fahrzeug_ID || null,
            FF_Mitglied_ID: parseInt(FF_Mitglied_ID),
            Einheit_ID: Einheit_ID || null,
            }
        })

        res.status(200).json(updatedEinteilung)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren der Einteilung', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await db2.einteilung.delete({
            where: {
            ID: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen der Einteilung', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}