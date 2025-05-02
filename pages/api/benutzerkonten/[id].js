import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })
    const { id } = req.query

    {/*if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }*/}

    if (req.method === 'GET') {
        try {
        const konto = await db1.benutzerkonto.findUnique({
            where: {
            ID: parseInt(id),
            },
            include: {
            person: true
            }
        })

        if (!konto) {
            return res.status(404).json({ message: 'Benutzerkonto nicht gefunden' })
        }

        res.status(200).json(konto)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen des Benutzerkontos', error: error.message })
        }
    } else if (req.method === 'PUT') {
        try {
        const { Benutzername, Passwort, Aktiv, Person_ID, Geaendert_am } = req.body

        const updateData = {
            Benutzername,
            Aktiv,
            Person_ID: parseInt(Person_ID),
            Geaendert_am: new Date(Geaendert_am),
        }

        // Nur Passwort aktualisieren, wenn es angegeben wurde
        if (Passwort) {
            updateData.Passwort = await bcrypt.hash(Passwort, 10)
        }

        const updatedKonto = await db1.benutzerkonto.update({
            where: {
            ID: parseInt(id),
            },
            data: updateData
        })

        res.status(200).json(updatedKonto)
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren des Benutzerkontos', error: error.message })
        }
    } else if (req.method === 'DELETE') {
        try {
        await db1.benutzerkonto.delete({
            where: {
            ID: parseInt(id),
            }
        })

        res.status(204).end()
        } catch (error) {
        res.status(400).json({ message: 'Fehler beim Löschen des Benutzerkontos', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}