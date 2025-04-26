import { getSession } from 'next-auth/react'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { aktiverVerein } = session.user

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const dienstabende = await prisma.dientsabend.findMany({
            where: {
            Verein_ID: aktiverVerein.vereinId
            },
            orderBy: {
            Datum: 'desc'
            }
        })
        res.status(200).json(dienstabende)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Dienstabende', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Datum, Thema } = req.body

        const neuerDienstabend = await prisma.dientsabend.create({
            data: {
            Datum: new Date(Datum),
            Thema,
            Verein_ID: aktiverVerein.vereinId,
            Erstellt_am: new Date()
            }
        })

        res.status(201).json(neuerDienstabend)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen des Dienstabends', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}