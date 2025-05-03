import { vereinDbPrisma as db2 } from '@/lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Logge die empfangenen Daten für Debugging
            console.log('POST request received with body:', req.body);

            const { Einsatznummer, Beschreibung, Datum_Anfang, Datum_Ende, Ort, Art, Uhrzeit_Anfang } = req.body;

            // Sicherstellen, dass Uhrzeit_Anfang als Date Objekte verarbeitet wird
            const uhrzeitAnfang = Uhrzeit_Anfang ? new Date(`1970-01-01T${Uhrzeit_Anfang}:00Z`) : null;

            // Stelle sicher, dass Datum_Anfang und Datum_Ende korrekt verarbeitet werden
            const datumAnfang = new Date(Datum_Anfang);
            const datumEnde = Datum_Ende ? new Date(Datum_Ende) : null;

            // Sicherstellen, dass Eingabewerte korrekt sind
            if (isNaN(datumAnfang)) {
                return res.status(400).json({ message: 'Ungültiges Datum_Anfang Format' });
            }

            if (datumEnde && isNaN(datumEnde)) {
                return res.status(400).json({ message: 'Ungültiges Datum_Ende Format' });
            }

            if (uhrzeitAnfang && isNaN(uhrzeitAnfang)) {
                return res.status(400).json({ message: 'Ungültiges Uhrzeit_Anfang Format' });
            }

            // Erstelle den neuen Einsatz
            const neuerEinsatz = await db2.einsatz.create({
                data: {
                    Einsatznummer: parseInt(Einsatznummer),
                    Beschreibung,
                    Datum_Anfang: datumAnfang,
                    Datum_Ende: datumEnde,
                    Uhrzeit_Anfang: uhrzeitAnfang,  // Hier wird die Uhrzeit in das richtige Format übergeben
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
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}

