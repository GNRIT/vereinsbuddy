import { getSession } from 'next-auth/react'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const fahrzeug = await prisma.fahrzeug.findUnique({
            where: {
            id: parseInt(id),
            },
            include: {
            Einteilung: {
                include: {
                Einsatz: true,
                },
            },
            },
        })

        if (!fahrzeug) {
            return res.status(404).json({ message: 'Fahrzeug nicht gefunden' })
        }

        res.status(200).json(fahrzeug)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Fahrzeugs', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Kennzeichen, Fahrzeugtyp, Besatzungsstaerke, Status } = req.body

        const updatedFahrzeug = await prisma.fahrzeug.update({
            where: {
            id: parseInt(id),
            },
            data: {
            Kennzeichen,
            Fahrzeugtyp,
            Besatzungsstaerke,
            Status,
            Geaendert_am: new Date(),
            }
        })

        res.status(200).json(updatedFahrzeug)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren des Fahrzeugs', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
            await prisma.einteilung.deleteMany({
                where: {
                Fahrzeug_ID: parseInt(id),
                },
            })
            
            await prisma.fahrzeug.delete({
                where: {
                id: parseInt(id),
                },
            })
        
            res.status(204).end()
            } catch (error) {
            res.status(400).json({ 
                message: 'Fehler beim Löschen des Fahrzeugs', 
                error: error.message 
            })
            }
        } else {
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).json({ message: `Method ${req.method} not allowed` })
        }
}