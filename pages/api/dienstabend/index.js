import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req });

    // Session und aktiver Verein prüfen
    /*const vereinId = session?.user?.aktiverVerein?.vereinId;
    if (!session || !vereinId) {
        return res.status(401).json({ message: 'Nicht autorisiert oder kein aktiver Verein gesetzt' });
    }*/

    if (req.method === 'GET') {
        try {
            const dienstabende = await db2.dientsabend.findMany({
                where: {
                    Verein_ID: vereinId,
                },
                orderBy: {
                    Datum: 'desc',
                },
            });
            res.status(200).json(dienstabende);
        } catch (error) {
            res.status(500).json({ message: 'Fehler beim Abrufen der Dienstabende', error: error.message });
        }
    } else if (req.method === 'POST') {
        try {
            const { Datum, Thema } = req.body;

            const neuerDienstabend = await db2.dientsabend.create({
                data: {
                    Datum: new Date(Datum),
                    Thema,
                    Verein_ID: vereinId,
                    Erstellt_am: new Date(),
                },
            });

            res.status(201).json(neuerDienstabend);
        } catch (error) {
            res.status(400).json({ message: 'Fehler beim Erstellen des Dienstabends', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
