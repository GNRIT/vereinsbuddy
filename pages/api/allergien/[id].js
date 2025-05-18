import { vereinDbPrisma as db2 } from '@/lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    // Auth optional – bei Bedarf wieder aktivieren
    // if (!session) return res.status(401).json({ message: 'Nicht autorisiert' })

    const allergieId = parseInt(id)
    if (isNaN(allergieId)) {
        return res.status(400).json({ message: 'Ungültige ID' })
    }

    switch (req.method) {
        case 'GET':
        try {
            const allergie = await db2.allergie.findUnique({
            where: { ID: allergieId },
            include: {
                ff_mitglied: true,
                jf_mitglied: true
            }
            })

            if (!allergie) {
            return res.status(404).json({ message: 'Allergie nicht gefunden' })
            }

            return res.status(200).json(allergie)
        } catch (error) {
            return res.status(500).json({ message: 'Fehler beim Abrufen der Allergie', error: error.message })
        }

        case 'PUT':
        try {
            const { FF_Mitglied_ID, JF_Mitglied_ID, Allergie, Beschreibung } = req.body

            const updatedAllergie = await db2.allergie.update({
            where: { ID: allergieId },
            data: {
                FF_Mitglied_ID: FF_Mitglied_ID ? parseInt(FF_Mitglied_ID) : null,
                JF_Mitglied_ID: JF_Mitglied_ID ? parseInt(JF_Mitglied_ID) : null,
                Allergie,
                Beschreibung,
                Geaendert_am: new Date()
            }
            })

            return res.status(200).json(updatedAllergie)
        } catch (error) {
            return res.status(400).json({ message: 'Fehler beim Aktualisieren der Allergie', error: error.message })
        }

        case 'DELETE':
        try {
            await db2.allergie.delete({
            where: { ID: allergieId }
            })
            return res.status(204).end()
        } catch (error) {
            return res.status(400).json({ message: 'Fehler beim Löschen der Allergie', error: error.message })
        }

        default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        return res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}
