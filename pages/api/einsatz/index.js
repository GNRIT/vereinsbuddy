import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req });

    // Optional: Session-Check
    /*
    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' });
    }
    */

    if (req.method === 'GET') {
        try {
            const einsaetze = await db2.einsatz.findMany({
                orderBy: {
                    Datum_Anfang: 'desc',
                },
            });
            res.status(200).json(einsaetze);
        } catch (error) {
            res.status(500).json({ message: 'Fehler beim Abrufen der Einsätze', error: error.message });
        }
    } else if (req.method === 'POST') {
        try {
            // Logge die empfangenen Daten für Debugging
            console.log('POST request received with body:', req.body);

            const { Einsatznummer, Beschreibung, Datum_Anfang, Datum_Ende, Ort, Uhrzeit_Anfang,
                Art} = req.body;

            // Validierung der erforderlichen Felder
            if (!Einsatznummer || !Datum_Anfang || !Ort) {
                return res.status(400).json({
                    message: 'Fehlende erforderliche Felder: Einsatznummer, Datum_Anfang, Ort',
                });
            }

            // Sicherstellen, dass Datum_Anfang und Datum_Ende als Date Objekte verarbeitet werden
            const datumAnfang = new Date(Datum_Anfang);
            const datumEnde = Datum_Ende ? new Date(Datum_Ende) : null;

            // Sicherstellen, dass die Eingabewerte korrekt sind
            if (isNaN(datumAnfang)) {
                return res.status(400).json({ message: 'Ungültiges Datum_Anfang Format' });
            }

            if (datumEnde && isNaN(datumEnde)) {
                return res.status(400).json({ message: 'Ungültiges Datum_Ende Format' });
            }

            // Erstelle den neuen Einsatz
            const neuerEinsatz = await db2.einsatz.create({
                data: {
                    Einsatznummer: parseInt(Einsatznummer),  // Stelle sicher, dass die Einsatznummer eine Zahl ist
                    Beschreibung,
                    Datum_Anfang: datumAnfang,
                    Datum_Ende: datumEnde,
                    Uhrzeit_Anfang: new Date(Uhrzeit_Anfang),
                    Ort,
                    Art,
                    Erstellt_am: new Date(),
                },
            });

            res.status(201).json(neuerEinsatz);
        } catch (error) {
            console.error('Fehler beim Erstellen des Einsatzes:', error);
            res.status(400).json({ message: 'Fehler beim Erstellen des Einsatzes', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
