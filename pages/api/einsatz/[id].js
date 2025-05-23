import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req });
    const { id } = req.query;

    // if (!session) {
    //   return res.status(401).json({ message: 'Nicht autorisiert' });
    // }

    if (req.method === 'GET') {
        try {
        const einsatz = await db2.einsatz.findUnique({
            where: {
            ID: parseInt(id),
            },
        });

        if (!einsatz) {
            return res.status(404).json({ message: 'Einsatz nicht gefunden' });
        }

        res.status(200).json(einsatz);
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Einsatzes', error: error.message });
        }
    }

    else if (req.method === 'PUT') {
        try {
        const {
            Einsatznummer,
            Beschreibung,
            Datum_Anfang,
            Datum_Ende,
            Uhrzeit_Anfang,
            Ort,
            Art
        } = req.body;

        const updatedEinsatz = await db2.einsatz.update({
            where: {
            ID: parseInt(id),
            },
            data: {
            Einsatznummer: parseInt(Einsatznummer),
            Beschreibung,
            Datum_Anfang: new Date(Datum_Anfang),
            Datum_Ende: Datum_Ende ? new Date(Datum_Ende) : null,
            Uhrzeit_Anfang: Uhrzeit_Anfang
                ? new Date(`1970-01-01T${Uhrzeit_Anfang}:00Z`)
                : null,
            Ort,
            Art,
            Geaendert_am: new Date(),
            },
        });

        res.status(200).json(updatedEinsatz);
        } catch (error) {
        console.error('PUT Fehler:', error);
        res.status(400).json({ message: 'Fehler beim Aktualisieren des Einsatzes', error: error.message });
        }
    }

    else if (req.method === 'DELETE') {
        try {
        await db2.einsatz.delete({
            where: {
            ID: parseInt(id),
            },
        });

        res.status(204).end();
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen des Einsatzes', error: error.message });
        }
    }

    else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
