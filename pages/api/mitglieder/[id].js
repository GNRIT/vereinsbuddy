import { authOptions } from '@/lib/auth';
import { vereinsbuddyPrisma as db1, vereinDbPrisma as db2 } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    const { id } = req.query;

    // Auth deaktiviert für Entwicklung, optional aktivieren
    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' });
    }*/

    try {
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
        return res.status(400).json({ message: 'Ungültige ID' });
        }

        if (req.method === 'GET') {
        const mitglied = await db1.person.findUnique({
            where: { ID: parsedId },
            include: {
            vereinszuordnung: {
                include: { verein: true }
            }
            }
        });

        if (!mitglied) {
            return res.status(404).json({ message: 'Mitglied nicht gefunden' });
        }

        const ffMitglied = await db2.ff_mitglied.findFirst({
            where: { Person_ID: parsedId },
            include: {
            ff_mitglied_lehrgang: {
                include: { lehrgang: true }
            }
            }
        });

        return res.status(200).json({ mitglied, ffMitglied });
        }

        else if (req.method === 'PUT') {
        // Optional: nur Admin darf bearbeiten
        /*if (session.user.role !== 'admin') {
            return res.status(403).json({ message: 'Keine Berechtigung' });
        }*/

        const { personData, lehrgaenge = [] } = req.body;

        if (!personData?.Vorname || !personData?.Name) {
            return res.status(400).json({ message: 'Vorname und Name sind erforderlich' });
        }

        const now = new Date();

        const result = await db1.$transaction(async (tx) => {
            const updatedPerson = await tx.person.update({
            where: { ID: parsedId },
            data: {
                ID: personData.ID,
                Vorname: personData.Vorname,
                Name: personData.Name,
                Geburtsdatum: personData.Geburtsdatum ? new Date(personData.Geburtsdatum) : null,
                Strasse: personData.Strasse,
                Hausnummer: personData.Hausnummer,
                Postleitzahl: personData.Postleitzahl,
                Ort: personData.Ort,
                Email: personData.Email,
                Handynr: personData.Handynr,
                Geaendert_am: now
            }
            });

            const existingZuordnung = await tx.vereinszuordnung.findFirst({
            where: { Person_ID: parsedId }
            });

            if (existingZuordnung) {
            await tx.vereinszuordnung.update({
                where: { ID: existingZuordnung.ID },
                data: {
                Rolle: personData.Rolle,
                Geaendert_am: now
                }
            });
            }

            const ffMitglied = await db2.ff_mitglied.findFirst({
            where: { Person_ID: parsedId }
            });

            if (ffMitglied) {
            await db2.ff_mitglied_lehrgang.deleteMany({
                where: { FF_Mitglied_ID: ffMitglied.ID }
            });

            if (lehrgaenge.length > 0) {
                await Promise.all(lehrgaenge.map(lehrgang =>
                db2.ff_mitglied_lehrgang.create({
                    data: {
                    FF_Mitglied_ID: ffMitglied.ID,
                    Lehrgang_ID: lehrgang.id,
                    Datum_bestanden: lehrgang.datum ? new Date(lehrgang.datum) : null,
                    Erstellt_am: now,
                    Geaendert_am: now
                    }
                })
                ));
            }
            }

            return updatedPerson;
        });

        return res.status(200).json(result);
        }

        else if (req.method === 'DELETE') {
        // Optional: nur Admin darf löschen
        if (session.user.role !== 'admin') {
            return res.status(403).json({ message: 'Keine Berechtigung' });
        }

        await db1.$transaction(async (tx) => {
            await tx.vereinszuordnung.deleteMany({
            where: { Person_ID: parsedId }
            });

            const ffMitglied = await db2.ff_mitglied.findFirst({
            where: { Person_ID: parsedId }
            });

            if (ffMitglied) {
            await db2.ff_mitglied_lehrgang.deleteMany({
                where: { FF_Mitglied_ID: ffMitglied.ID }
            });

            await db2.ff_mitglied.delete({
                where: { ID: ffMitglied.ID }
            });
            }

            await tx.person.delete({
            where: { ID: parsedId }
            });
        });

        return res.status(200).json({ message: 'Mitglied erfolgreich gelöscht' });
        }

        else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).json({ message: `Methode ${req.method} nicht erlaubt` });
        }
    } catch (error) {
        console.error('API Fehler:', error);
        return res.status(500).json({
        message: 'Interner Serverfehler',
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}
