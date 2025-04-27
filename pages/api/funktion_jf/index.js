import { getSession } from 'next-auth/react'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const funktionen = await prisma.funktion_jf.findMany({
            orderBy: {
            Name: 'asc',
            },
        })
        res.status(200).json(funktionen)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Jugendfunktionen', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Name, Ist_admin, Erstellt_am } = req.body

        const neueFunktion = await prisma.funktion_jf.create({
            data: {
            Name,
            Ist_admin,
            Erstellt_am: new Date(Erstellt_am),
            }
        })

        res.status(201).json(neueFunktion)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen der Jugendfunktion', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}