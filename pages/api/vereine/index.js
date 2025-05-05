import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';


export default async function handler(req, res) {
    const session = await getSession({ req })

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    // Nur Admins dürfen Vereine verwalten
    const isAdmin = session.user.vereine.some(v => v.Rolle === 'admin')
    if (!isAdmin) {
        return res.status(403).json({ message: 'Keine Berechtigung' })
    }*/

    if (req.method === 'GET') {
        try {
        const vereine = await db1.verein.findMany()
        res.status(200).json(vereine)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Vereine', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { name, strasse, hausnummer, postleitzahl, ort, subdomain } = req.body

        // Prüfen ob Subdomain bereits existiert
        const existingVerein = await db1.verein.findUnique({
            where: {
            Subdomain: subdomain
            }
        })

        if (existingVerein) {
            return res.status(400).json({ message: 'Subdomain bereits vergeben' })
        }

        const neuerVerein = await db1.verein.create({
            data: {
            Name: name,
            Strasse: strasse,
            Hausnummer: hausnummer,
            Postleitzahl: postleitzahl,
            Ort: ort,
            Subdomain: subdomain,
            Erstellt_am: new Date(),
            Geaendert_am: new Date()
            }
        })

        res.status(201).json(neuerVerein)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen des Vereins', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}