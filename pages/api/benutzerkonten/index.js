import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })

    /*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }*/

    if (req.method === 'GET') {
        try {
        const konten = await db1.benutzerkonto.findMany({
            include: {
            person: true
            }
        })
        res.status(200).json(konten)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Benutzerkonten', error: error.message })
        }
    } else if (req.method === 'POST') {
        try {
        const { Benutzername, Passwort, Aktiv, Person_ID, Erstellt_am } = req.body

        // Passwort hashen
        const hashedPassword = await bcrypt.hash(Passwort, 10)

        const neuesKonto = await db1.benutzerkonto.create({
            data: {
            Benutzername,
            Passwort: hashedPassword,
            Aktiv,
            Person_ID: parseInt(Person_ID),
            Erstellt_am: new Date(Erstellt_am),
            }
        })

        res.status(201).json(neuesKonto)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Erstellen des Benutzerkontos', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}