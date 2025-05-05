import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query
    const parsedId = parseInt(id, 10);

    if (isNaN(parsedId)) {
        return res.status(400).json({ message: 'Ungültige Verein-ID' });
    }

    // Überprüfe die Session und Berechtigung
    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' });
    }*/

    const isAdmin = session.user.vereine.some(v => v.Rolle === 'admin');
    if (!isAdmin) {
        return res.status(403).json({ message: 'Keine Berechtigung' });
    }

    if (req.method === 'GET') {
        try {
            const verein = await db1.verein.findUnique({
                where: {
                    ID: parsedId
                }
            })

            if (!verein) {
                return res.status(404).json({ message: 'Verein nicht gefunden' });
            }

            res.status(200).json(verein);
        } catch (error) {
            console.error('Error fetching Verein:', error);
            res.status(500).json({ message: 'Fehler beim Abrufen des Vereins', error: error.message });
        }
    } else if (req.method === 'PUT') {
        try {
            const { Name, Strasse, Hausnummer, Postleitzahl, Ort, Subdomain } = req.body;

            if (!Name || !Strasse || !Hausnummer || !Postleitzahl || !Ort || !Subdomain) {
                return res.status(400).json({ message: 'Alle Felder müssen ausgefüllt werden' });
            }

            const updatedVerein = await db1.verein.update({
                where: { ID: parsedId },
                data: {
                    Name,
                    Strasse,
                    Hausnummer,
                    Postleitzahl,
                    Ort,
                    Subdomain,
                    Geaendert_am: new Date(Geaendert_am)
                }
            })

            res.status(200).json(updatedVerein);
        } catch (error) {
            console.error('Error updating Verein:', error);
            res.status(400).json({ message: 'Fehler beim Aktualisieren des Vereins', error: error.message });
        }
    } else if (req.method === 'DELETE') {
        try {
            // Zuerst alle Zuordnungen löschen
            await db1.vereinszuordnung.deleteMany({
                where: {
                    Verein_ID: parsedId
                }
            });

            // Dann den Verein löschen
            await db1.verein.delete({
                where: { ID: parsedId }
            });

            res.status(204).end();
        } catch (error) {
            console.error('Error deleting Verein:', error);
            res.status(400).json({ message: 'Fehler beim Löschen des Vereins', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
