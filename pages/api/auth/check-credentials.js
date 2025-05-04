import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { benutzername } = req.body;

    try {
        const user = await db1.benutzerkonto.findUnique({
            where: { benutzername: benutzername },
            select: {
                passwort: true,
                person: {
                    select: {
                        vorname: true,
                        name: true,
                        vereinszuordnung: {
                            include: {
                                verein: true
                            }
                        }
                    }
                }
            }
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({
            passwortHash: user.passwort,
            userData: {
                vorname: user.person.vorname,
                name: user.person.name,
                vereine: user.person.vereinszuordnung.map(z => ({
                    verein_id: z.verein_id,
                    vereinName: z.verein.name,
                    rolle: z.rolle
                }))
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}