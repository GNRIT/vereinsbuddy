import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                benutzername: { label: "Benutzername", type: "text" },
                passwort: { label: "Passwort", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const user = await db1.benutzerkonto.findUnique({
                        where: {
                            Benutzername: credentials.benutzername,
                            Aktiv: true
                        },
                        include: {
                            person: {
                                include: {
                                    vereinszuordnung: {
                                        include: {
                                            verein: true
                                        }
                                    }
                                }
                            }
                        }
                    });
            
                    console.log("Gefundener Benutzer:", user);  // Gibt den Benutzer in der Konsole aus
            
                    if (!user) {
                        console.error('Benutzer nicht gefunden oder inaktiv');
                        return null;
                    }
            
                    const isValid = await bcrypt.compare(credentials.passwort, user.Passwort);
                    console.log("Passwort validiert:", isValid);
            
                    if (!isValid) {
                        console.error('Ungültiges Passwort');
                        return null;
                    }
            
                    return {
                        id: user.ID,
                        benutzername: user.Benutzername,
                        vorname: user.person ? user.person.Vorname : null,
                        name: user.person ? user.person.Name : null,
                        email: user.person ? user.person.Email : null,
                        vereine: user.person && user.person.vereinszuordnung ? user.person.vereinszuordnung.map(z => ({
                            vereinId: z.Verein_ID,
                            vereinName: z.verein.Name,
                            subdomain: z.verein.Subdomain,
                            rolle: z.Rolle
                        })) : [],
                        Person_ID: user.Person_ID
                    };
                } catch (error) {
                    console.error('Fehler in der Authentifizierung:', error);
                    return null;
                }
            }
            
        })
    ],
    pages: {
        signIn: '/auth/login',
        error: '/auth/login',
        newUser: null
    },
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60,
        updateAge: 6 * 60 * 60
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.ID; // wichtig für next-auth
                token.name = user.Vorname || user.Benutzername;
                token.email = user.Email || null;
                token.Person_ID = user.Person_ID;
                // 👇 Alles, was du brauchst für session.user
                token.user = user;
        
                // Optional: Default-Verein setzen, wenn nur einer vorhanden
                if (user.vereine?.length === 1) {
                token.user.aktuellerVerein = user.vereine[0].Verein_ID;
                }
            }
            return token;
            },
            async session({ session, token }) {
            // next-auth erwartet das hier
            session.user = token.user || {
                id: token.id,
                name: token.name,
                email: token.email,
                Person_ID: token.Person_ID
            };
            return session;
            }
        },
    debug: process.env.NODE_ENV === 'production'
};

export default (req, res) => NextAuth(req, res, authOptions);
