import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }*/

    if (req.method === 'GET') {
        try {
        const zuordnungen = await db2.mitglied_funktionen.findMany({
            include: {
            ff_mitglied: {
                select: {
                Person_ID: true,
                }
            },
            funktion_ff: {
                select: {
                Name: true
                }
            },
            funktion_jf: {
                select: {
                Name: true
                }
            }
            },
            orderBy: {
            ID: 'desc',
            },
        })
        res.status(200).json(zuordnungen)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Zuordnungen', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Mitglied_ID, Funktion_ID, Typ, Erstellt_am } = req.body

        const neueZuordnung = await db2.mitglied_funktionen.create({
            data: {
            Mitglied_ID: parseInt(Mitglied_ID),
            Funktion_ID: parseInt(Funktion_ID),
            Typ,
            Erstellt_am: new Date(Erstellt_am),
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