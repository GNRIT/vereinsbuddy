import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: 'Nicht autorisiert' })
    }

    if (req.method === 'GET') {
        try {
        const personen = await db1.person.findMany({
            orderBy: {
            Name: 'asc',
            },
        })
        res.status(200).json(personen)
        } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Personen', error: error.message })
        }
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}