import { vereinDbPrisma as db2 } from '@/lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
        const zuordnungen = await db2.ff_mitglied_lehrgang.findMany({
            include: {
            ff_mitglied: true,
            lehrgang: true
            }
        });
        res.status(200).json(zuordnungen);
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Zuordnungen', error: error.message });
        }
    } else if (req.method === 'POST') {
        try {
        const { FF_Mitglied_ID, Lehrgang_ID, Datum_bestanden } = req.body;

        const mitgliedId = parseInt(FF_Mitglied_ID);
        const lehrgangId = parseInt(Lehrgang_ID);

        if (isNaN(mitgliedId) || isNaN(lehrgangId)) {
            return res.status(400).json({ message: 'Ungültige Mitglieds- oder Lehrgangs-ID.' });
        }

        const neueZuordnung = await db2.ff_mitglied_lehrgang.create({
            data: {
            FF_Mitglied_ID: mitgliedId,
            Lehrgang_ID: lehrgangId,
            Datum_bestanden: Datum_bestanden ? new Date(Datum_bestanden) : null,
            Erstellt_am: new Date()
            }
        });

        res.status(201).json(neueZuordnung);
        } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Fehler beim Erstellen der Zuordnung', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
