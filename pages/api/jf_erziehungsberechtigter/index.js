import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req });
    const { id } = req.query; 
    
    // Optional: Session-Prüfung, falls du sie wieder aktivieren möchtest
    /* if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' });
    } */

    if (req.method === 'GET') {
        try {
            if (!id || isNaN(parseInt(id))) {
                return res.status(400).json({ message: 'Ungültige ID' });
            }

            const erziehungsberechtigte = await db2.jf_erziehungsberechtigter.findMany({
                where: {
                    ID: parseInt(id)
                }
            });

            if (erziehungsberechtigte.length === 0) {
                return res.status(404).json({ message: 'Keine Erziehungsberechtigten gefunden' });
            }

            res.status(200).json(erziehungsberechtigte);
        } catch (error) {
            console.error('Fehler beim Abrufen der Erziehungsberechtigten:', error);
            res.status(500).json({ message: 'Fehler beim Abrufen', error: error.message });
        }
    } else if (req.method === 'POST') {
        try {
            const { JF_Mitglied_ID, Person_ID, Erstellt_am } = req.body;

            // Validierung der Eingabedaten
            if (!JF_Mitglied_ID || !Person_ID) {
                return res.status(400).json({ message: 'JF_Mitglied_ID und Person_ID sind erforderlich' });
            }

            const exists = await db2.jf_erziehungsberechtigter.findFirst({
                where: {
                    JF_Mitglied_ID: parseInt(JF_Mitglied_ID),
                    Person_ID: parseInt(Person_ID),
                }
            });

            if (exists) {
                return res.status(400).json({ message: 'Diese Zuordnung existiert bereits' });
            }

            const neueZuordnung = await db2.jf_erziehungsberechtigter.create({
                data: {
                    JF_Mitglied_ID: parseInt(JF_Mitglied_ID),
                    Person_ID: parseInt(Person_ID),
                    Erstellt_am: Erstellt_am ? new Date(Erstellt_am) : new Date()
                }
            });

            res.status(201).json(neueZuordnung);
        } catch (error) {
            console.error('Fehler beim Erstellen der Zuordnung:', error);
            res.status(400).json({ message: 'Fehler beim Erstellen', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
