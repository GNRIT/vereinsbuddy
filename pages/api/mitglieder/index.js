import { authOptions } from '@/lib/auth'
import { vereinsbuddyPrisma as db1 } from '@/lib/prisma'
import { getServerSession } from 'next-auth'

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    try {
        if (req.method === 'GET') {
        const { page = 1, limit = 10 } = req.query
        const skip = (Math.max(1, parseInt(page)) - 1) * Math.max(1, parseInt(limit))

        const [mitglieder, total] = await Promise.all([
            db1.person.findMany({
            skip,
            take: parseInt(limit),
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
            },
            orderBy: { Name: 'asc' }
            }),
            db1.person.count()
        ])

        res.status(200).json({
            data: mitglieder,
            pagination: {
            page: parseInt(page),
            limit: parseInt(limit),
            total,
            totalPages: Math.ceil(total / parseInt(limit))
            }
        })
        } 
        else if (req.method === 'POST') {
        if (session.user.role !== 'admin') {
            return res.status(403).json({ message: 'Keine Berechtigung' })
        }

        const { personData, lehrgaenge = [] } = req.body

        // Validierung
        if (!personData.Vorname || !personData.Name) {
            return res.status(400).json({ message: 'Vorname und Name sind erforderlich' })
        }

        const result = await db1.$transaction(async (tx) => {
            // Person erstellen
            const neuePerson = await tx.person.create({
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
                Erstellt_am: new Date(),
                Geaendert_am: new Date()
            }
            })

            // FF-Mitglied erstellen
            const ffMitglied = await tx.ff_mitglied.create({
            data: {
                Person_ID: neuePerson.ID,
                Eintrittsdatum: new Date(),
                Status: 'aktiv',
                Erstellt_am: new Date(),
                Geaendert_am: new Date()
            }
            })

            // Vereinszuordnung erstellen
            const verein = await tx.verein.findFirst()
            if (verein) {
            await tx.vereinszuordnung.create({
                data: {
                Person_ID: neuePerson.ID,
                Verein_ID: verein.ID,
                Rolle: personData.Rolle || 'mitglied',
                Erstellt_am: new Date(),
                Geaendert_am: new Date()
                }
            })
            }

            // Lehrgänge zuordnen
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

            return neuePerson
        })

        res.status(201).json(result)
        } 
        else {
        res.setHeader('Allow', ['GET', 'POST'])
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