import { vereinDbPrisma as db2 } from '@/lib/prisma';

export default async function handler(req, res) {
    const { id } = req.query;
    const zuordnungId = parseInt(id);

    if (isNaN(zuordnungId)) {
        return res.status(400).json({ message: 'Ungültige Zuordnungs-ID' });
    }

    if (req.method === 'GET') {
        try {
        const zuordnung = await db2.ff_mitglied_lehrgang.findUnique({
            where: { ID: zuordnungId },
            include: {
            ff_mitglied: true,
            lehrgang: true
            }
        });

        if (!zuordnung) {
            return res.status(404).json({ message: 'Zuordnung nicht gefunden' });
        }

        res.status(200).json(zuordnung);
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Zuordnung', error: error.message });
        }
    } else if (req.method === 'PUT') {
        try {
        const { FF_Mitglied_ID, Lehrgang_ID, Datum_bestanden } = req.body;

        const mitgliedId = parseInt(FF_Mitglied_ID);
        const lehrgangId = parseInt(Lehrgang_ID);

        if (isNaN(mitgliedId) || isNaN(lehrgangId)) {
            return res.status(400).json({ message: 'Ungültige Mitglieds- oder Lehrgangs-ID.' });
        }

        const updatedZuordnung = await db2.ff_mitglied_lehrgang.update({
            where: { ID: zuordnungId },
            data: {
            FF_Mitglied_ID: mitgliedId,
            Lehrgang_ID: lehrgangId,
            Datum_bestanden: Datum_bestanden ? new Date(Datum_bestanden) : null,
            Geaendert_am: new Date()
            }
        });

        res.status(200).json(updatedZuordnung);
        } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Fehler beim Aktualisieren der Zuordnung', error: error.message });
        }
    } else if (req.method === 'DELETE') {
        try {
        await db2.ff_mitglied_lehrgang.delete({
            where: { ID: zuordnungId }
        });

        res.status(204).end();
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen der Zuordnung', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
