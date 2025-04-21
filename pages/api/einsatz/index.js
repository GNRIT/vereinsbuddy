import { getSession } from 'next-auth/react'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const einsaetze = await prisma.einsatz.findMany({
            orderBy: {
            StartDatum: 'desc',
            },
        })
        res.status(200).json(einsaetze)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Einsätze', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Titel, Beschreibung, StartDatum, EndDatum, Ort } = req.body

        const neuerEinsatz = await prisma.einsatz.create({
            data: {
            Titel,
            Beschreibung,
            StartDatum: new Date(StartDatum),
            EndDatum: EndDatum ? new Date(EndDatum) : null,
            Ort,
            Erstellt_am: new Date(),
            }
        })

        res.status(201).json(neuerEinsatz)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen des Einsatzes', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}