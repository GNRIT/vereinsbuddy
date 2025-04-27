import { getSession } from 'next-auth/react'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const lehrgaenge = await prisma.lehrgang.findMany({
            orderBy: {
            Reihenfolge: 'asc',
            },
        })
        res.status(200).json(lehrgaenge)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Lehrgänge', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Abk_rzung, Beschreibung, Reihenfolge } = req.body

        const neuerLehrgang = await prisma.lehrgang.create({
            data: {
            Abk_rzung,
            Beschreibung,
            Reihenfolge,
            Erstellt_am: new Date(),
            }
        })

        res.status(201).json(neuerLehrgang)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen des Lehrgangs', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}