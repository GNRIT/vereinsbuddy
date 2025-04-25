import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { benutzername } = req.body;

    try {
        const user = await db1.benutzerkonto.findUnique({
            where: { Benutzername: benutzername },
            select: {
                Passwort: true,
                Person: {
                    select: {
                        Vorname: true,
                        Name: true,
                        Vereinszuordnung: {
                            include: {
                                Verein: true
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
            passwortHash: user.Passwort,
            userData: {
                vorname: user.Person.Vorname,
                name: user.Person.Name,
                vereine: user.Person.Vereinszuordnung.map(z => ({
                    vereinId: z.Verein_ID,
                    vereinName: z.Verein.Name,
                    rolle: z.Rolle
                }))
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}