import { vereinsbuddyPrisma as db1, vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
export default async function handler(req, res) {
    // Session holen
    const session = await getSession({ req });

    /* Authorization prüfen, optional aktivieren
    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' });
    }
    */

    switch (req.method) {
        case 'GET':
            return await handleGet(req, res);
        case 'POST':
            return await handlePost(req, res);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}

async function handleGet(req, res) {
    try {
        const mitglieder = await db2.jf_mitglied.findMany({
            orderBy: {
                ID: 'asc'
            },
            include: {
                allergie: true, // Person-Daten einbinden
            },
        });
        res.status(200).json(mitglieder);
    } catch (error) {
        console.error('Fehler beim Abrufen der Mitglieder:', error);
        res.status(500).json({ message: 'Fehler beim Abrufen der Mitglieder', error: error.message });
    }
}

async function handlePost(req, res) {
    try {
        console.log('Body received in POST /api/jf-mitglieder:', req.body);

        const {
            Person_ID,
            Eintrittsdatum,
            Austrittsdatum,
            Aufnahmedatum,
            Status,
            Erstellt_am,
            Geaendert_am
        } = req.body;

        if (typeof Person_ID === 'undefined' || isNaN(parseInt(Person_ID))) {
            return res.status(400).json({ message: 'Ungültige oder fehlende Person_ID', payload: req.body });
        }

        if (!Status || (Status !== 'aktiv' && Status !== 'inaktiv')) {
            return res.status(400).json({ message: 'Ungültiger Status (muss "aktiv" oder "inaktiv" sein)' });
        }

        const person = await db1.person.findUnique({
            where: {
                ID: parseInt(Person_ID)
            }
        });

        if (!person) {
            return res.status(404).json({ message: `Person mit ID ${Person_ID} nicht gefunden` });
        }

        const neuesMitglied = await db2.jf_mitglied.create({
            data: {
                Person_ID: parseInt(Person_ID),
                Eintrittsdatum: parseDate(Eintrittsdatum) || new Date(),
                Austrittsdatum: parseDate(Austrittsdatum),
                Aufnahmedatum: parseDate(Aufnahmedatum),
                Status,
                Erstellt_am: parseDate(Erstellt_am) || new Date(),
                Geaendert_am: parseDate(Geaendert_am) || new Date(),
            }
        });

        res.status(201).json(neuesMitglied);
    } catch (error) {
        console.error('Fehler beim Erstellen des Mitglieds:', error);
        res.status(500).json({ 
            message: 'Serverfehler beim Erstellen des Mitglieds', 
            error: error.message,
            details: error.meta || null
        });
    }
}



function parseDate(dateString) {
    if (!dateString) return null;
    const parsed = new Date(dateString);
    return isNaN(parsed) ? null : parsed;
}
