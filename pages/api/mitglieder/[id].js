import { authOptions } from '@/lib/auth'
import { vereinsbuddyPrisma as db1 } from '@/lib/prisma'
import { getServerSession } from 'next-auth'

    export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const { id } = req.query

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    try {
        if (req.method === 'GET') {
        const mitglied = await db1.person.findUnique({
            where: { ID: parseInt(id) },
            include: {
            Vereinszuordnung: {
                include: { Verein: true }
            },
            ff_mitglied: {
                include: {
                ff_mitglied_lehrgang: {
                    include: {
                    lehrgang: true
                    }
                }
                }
            }
            }
        })

        if (!mitglied) {
            return res.status(404).json({ message: 'Mitglied nicht gefunden' })
        }

        res.status(200).json(mitglied)
        }
        else if (req.method === 'PUT') {
        if (session.user.role !== 'admin') {
            return res.status(403).json({ message: 'Keine Berechtigung' })
        }

        const { personData, lehrgaenge = [] } = req.body

        const result = await db1.$transaction(async (tx) => {
            // Person aktualisieren
            const updatedPerson = await tx.person.update({
            where: { ID: parseInt(id) },
            data: {
                Vorname: personData.Vorname,
                Name: personData.Name,
                Geburtsdatum: personData.Geburtsdatum ? new Date(personData.Geburtsdatum) : null,
                Strasse: personData.Strasse,
                Hausnummer: personData.Hausnummer,
                Postleitzahl: personData.Postleitzahl,
                Ort: personData.Ort,
                Email: personData.Email,
                Handynr: personData.Handynr,
                Geaendert_am: new Date()
            }
            })

            // Vereinszuordnung aktualisieren
            const existingZuordnung = await tx.vereinszuordnung.findFirst({
            where: { Person_ID: parseInt(id) }
            })
            
            if (existingZuordnung) {
            await tx.vereinszuordnung.update({
                where: { ID: existingZuordnung.ID },
                data: {
                Rolle: personData.Rolle,
                Geaendert_am: new Date()
                }
            })
            }

            // FF-Mitglied finden
            const ffMitglied = await tx.ff_mitglied.findFirst({
            where: { Person_ID: parseInt(id) }
            })

            if (ffMitglied) {
            // Bestehende Lehrgänge löschen
            await tx.ff_mitglied_lehrgang.deleteMany({
                where: { FF_Mitglied_ID: ffMitglied.ID }
            })

            // Neue Lehrgänge hinzufügen
            if (lehrgaenge.length > 0) {
                await Promise.all(lehrgaenge.map(lehrgang => 
                tx.ff_mitglied_lehrgang.create({
                    data: {
                    FF_Mitglied_ID: ffMitglied.ID,
                    Lehrgang_ID: lehrgang.id,
                    Datum_bestanden: lehrgang.datum ? new Date(lehrgang.datum) : null,
                    Erstellt_am: new Date(),
                    Geaendert_am: new Date()
                    }
                })
                ))
            }
            }

            return updatedPerson
        })

        res.status(200).json(result)
        }
        else if (req.method === 'DELETE') {
        if (session.user.role !== 'admin') {
            return res.status(403).json({ message: 'Keine Berechtigung' })
        }

        await db1.$transaction(async (tx) => {
            // Vereinszuordnung löschen
            await tx.vereinszuordnung.deleteMany({
            where: { Person_ID: parseInt(id) }
        })

        // FF-Mitglied und zugehörige Lehrgänge löschen
        const ffMitglied = await tx.ff_mitglied.findFirst({
            where: { Person_ID: parseInt(id) }
            })
            
            if (ffMitglied) {
            await tx.ff_mitglied_lehrgang.deleteMany({
                where: { FF_Mitglied_ID: ffMitglied.ID }
            })
            
            await tx.ff_mitglied.delete({
                where: { ID: ffMitglied.ID }
            })
        }

        // Person löschen
        await tx.person.delete({
            where: { ID: parseInt(id) }
            })
        })

        res.status(204).end()
        }
        else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
        }
    } catch (error) {
        console.error('API Fehler:', error)
        res.status(500).json({ 
        message: 'Interner Serverfehler',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
        })
    }
}