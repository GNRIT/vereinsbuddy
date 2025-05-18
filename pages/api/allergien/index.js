import { vereinDbPrisma as db2 } from '@/lib/prisma'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
    const session = await getSession({ req })

    // Optionaler Auth-Check
    // if (!session) return res.status(401).json({ message: 'Nicht autorisiert' })

    switch (req.method) {
        case 'GET':
        try {
            const allergien = await db2.allergie.findMany({
            include: {
                ff_mitglied: true // Dies ist optional, um `ff_mitglied` zu erhalten, wenn du es benötigst
            },
            orderBy: { Allergie: 'asc' }
            })
            return res.status(200).json(allergien)
        } catch (error) {
            return res.status(500).json({ message: 'Fehler beim Abrufen der Allergien', error: error.message })
        }

        case 'POST':
        try {
            const { FF_Mitglied_ID, JF_Mitglied_ID, Allergie, Beschreibung } = req.body

            // Validierung
            if (!Allergie || (!FF_Mitglied_ID && !JF_Mitglied_ID)) {
            return res.status(400).json({ message: 'Bitte Allergie und Mitglied angeben.' })
            }

            // Erstellen einer Allergie nur mit IDs, ohne das `ff_mitglied`-Objekt
            const neueAllergie = await db2.allergie.create({
            data: {
                FF_Mitglied_ID: FF_Mitglied_ID ?? null,  // Übergebe nur die ID
                JF_Mitglied_ID: JF_Mitglied_ID ?? null,  // Übergebe nur die ID
                Allergie,
                Beschreibung: Beschreibung || null,
                Erstellt_am: new Date()
            }
            })

            return res.status(201).json(neueAllergie)
        } catch (error) {
            console.error('DB-Fehler:', error)
            return res.status(400).json({ message: 'Fehler beim Erstellen der Allergie', error: error.message })
        }

        default:
        res.setHeader('Allow', ['GET', 'POST'])
        return res.status(405).json({ message: `Methode ${req.method} nicht erlaubt` })
    }
}
