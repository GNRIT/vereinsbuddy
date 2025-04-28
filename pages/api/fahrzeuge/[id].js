import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const fahrzeug = await db2.fahrzeug.findUnique({
            where: {
            ID: parseInt(id),
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

        const updatedFahrzeug = await db2.fahrzeug.update({
            where: {
            ID: parseInt(id),
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
            await db2.einteilung.deleteMany({
                where: {
                Fahrzeug_ID: parseInt(id),
                },
            })

            await db2.fahrzeug.delete({
                where: {
                ID: parseInt(id),
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