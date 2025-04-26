import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }*/

    if (!id || isNaN(parseInt(id))) {
        return res.status(400).json({ message: 'Ungültige ID' })
    }

    const mitgliedId = parseInt(id);

    try {
        if (req.method === 'GET') {
            const mitglied = await db2.jf_mitglied.findUnique({
                where: { ID: mitgliedId },
            })

            if (!mitglied) {
                return res.status(404).json({ message: 'Mitglied nicht gefunden' })
            }

            return res.status(200).json(mitglied)

        } else if (req.method === 'PUT') {
            const {
                Person_ID,
                Eintrittsdatum,
                Austrittsdatum,
                Aufnahmedatum,
                Status, // <-- richtig benannt!
                Erstellt_am,
                Geaendert_am,
            } = req.body

            const updatedMitglied = await db2.jf_mitglied.update({
                where: { ID: mitgliedId },
                data: {
                    Person_ID,
                    Eintrittsdatum: Eintrittsdatum ? new Date(Eintrittsdatum) : undefined,
                    Austrittsdatum: Austrittsdatum ? new Date(Austrittsdatum) : null,
                    Aufnahmedatum: Aufnahmedatum ? new Date(Aufnahmedatum) : null,
                    Status, // <-- korrekt
                    Erstellt_am: Erstellt_am ? new Date(Erstellt_am) : new Date(), // fallback: jetzt
                    Geaendert_am: Geaendert_am ? new Date(Geaendert_am) : new Date(),
                }
            })

            return res.status(200).json(updatedMitglied)

        } else if (req.method === 'DELETE') {
            await db2.jf_mitglied.delete({
                where: { ID: mitgliedId },
            })

            return res.status(204).end()
        } else {
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            return res.status(405).json({ message: `Method ${req.method} not allowed` })
        }
    } catch (error) {
        console.error('Fehler im Handler:', error)
        return res.status(500).json({ message: 'Server-Fehler', error: error.message })
    }
}
