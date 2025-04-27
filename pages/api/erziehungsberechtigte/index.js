import { getSession } from 'next-auth/react'
import { vereinDbPrisma as prisma } from '../../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const erziehungsberechtigte = await prisma.jf_erziehungsberechtigter.findMany({
            include: {
            jf_mitglied: true,
            person: true
            }
        })
        res.status(200).json(erziehungsberechtigte)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { JF_Mitglied_ID, Person_ID } = req.body

        // Prüfen ob die Zuordnung bereits existiert
        const exists = await prisma.jf_erziehungsberechtigter.findFirst({
            where: {
            JF_Mitglied_ID: parseInt(JF_Mitglied_ID),
            Person_ID: parseInt(Person_ID)
            }
        })

        if (exists) {
            return res.status(400).json({ message: 'Diese Zuordnung existiert bereits' })
        }

        const neueZuordnung = await prisma.jf_erziehungsberechtigter.create({
            data: {
            JF_Mitglied_ID: parseInt(JF_Mitglied_ID),
            Person_ID: parseInt(Person_ID),
            Erstellt_am: new Date()
            }
        })

        res.status(201).json(neueZuordnung)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}