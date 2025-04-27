import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
        const zuordnungen = await prisma.ff_mitglied_lehrgang.findMany({
            include: {
            ff_mitglied: true,
            lehrgang: true
            }
        })
        res.status(200).json(zuordnungen)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Zuordnungen', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { FF_Mitglied_ID, Lehrgang_ID, Datum_bestanden } = req.body

        const neueZuordnung = await prisma.ff_mitglied_lehrgang.create({
            data: {
            FF_Mitglied_ID: parseInt(FF_Mitglied_ID),
            Lehrgang_ID: parseInt(Lehrgang_ID),
            Datum_bestanden: Datum_bestanden ? new Date(Datum_bestanden) : null,
            Erstellt_am: new Date()
            }
        })

        res.status(201).json(neueZuordnung)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen der Zuordnung', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}