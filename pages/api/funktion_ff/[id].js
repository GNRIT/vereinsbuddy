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
        const funktion = await db2.funktion_ff.findUnique({
            where: {
            ID: parseInt(id),
            },
            include: {
            mitglied_funktionen: {
                include: {
                mitglied: true
                }
            }
            }
        })

        if (!funktion) {
            return res.status(404).json({ message: 'Funktion nicht gefunden' })
        }

        res.status(200).json(funktion)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Funktion', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Name, Ist_Admin, Geaendert_am } = req.body

        const updatedFunktion = await db2.funktion_ff.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            Name,
            Ist_Admin,
            Geaendert_am: new Date(Geaendert_am),
            }
        })

        res.status(200).json(updatedFunktion)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren der Funktion', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        // Zuerst die Zuordnungen löschen
        await db2.mitglied_funktionen.deleteMany({
            where: {
            Funktion_ID: parseInt(id),
            }
        })

        // Dann die Funktion selbst löschen
        await db2.funktion_ff.delete({
            where: {
            ID: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen der Funktion', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}