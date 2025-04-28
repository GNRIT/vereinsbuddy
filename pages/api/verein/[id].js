import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';


export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    // Nur Admins dürfen Vereine verwalten
    const isAdmin = session.user.vereine.some(v => v.rolle === 'admin')
    if (!isAdmin) {
        return res.status(403).json({ message: 'Keine Berechtigung' })
    }*/

    if (req.method === 'GET') {
        try {
        const verein = await db1.verein.findUnique({
            where: {
            ID: parseInt(id)
            }
        })

        if (!verein) {
            return res.status(404).json({ message: 'Verein nicht gefunden' })
        }

        res.status(200).json(verein)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Vereins', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Name, Strasse, Hausnummer, Postleitzahl, Ort, Subdomain } = req.body

        // Prüfen ob neue Subdomain bereits existiert (außer beim aktuellen Verein)
        const existingVerein = await db1.verein.findFirst({
            where: {
            Subdomain: Subdomain,
            NOT: {
                ID: parseInt(id)
            }
            }
        })

        if (existingVerein) {
            return res.status(400).json({ message: 'Subdomain bereits vergeben' })
        }

        const updatedVerein = await db1.verein.update({
            where: {
            ID: parseInt(id)
            },
            data: {
            Name,
            Strasse,
            Hausnummer,
            Postleitzahl,
            Ort,
            Subdomain,
            Geaendert_am: new Date()
            }
        })

        res.status(200).json(updatedVerein)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren des Vereins', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        // Zuerst alle Zuordnungen löschen
        await db1.vereinszuordnung.deleteMany({
            where: {
            Verein_ID: parseInt(id)
            }
        })

        // Dann den Verein löschen
        await db1.verein.delete({
            where: {
            ID: parseInt(id)
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen des Vereins', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}