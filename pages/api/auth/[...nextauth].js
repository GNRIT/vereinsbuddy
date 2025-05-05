import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET, // ✅ WICHTIG: Jetzt korrekt gesetzt
    providers: [
        CredentialsProvider({
        name: 'Credentials',
        credentials: {
            benutzername: { label: 'Benutzername', type: 'text' },
            passwort: { label: 'Passwort', type: 'password' }
        },
        async authorize(credentials) {
            try {
            const user = await db1.benutzerkonto.findFirst({
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

            if (!user) return null;

            const isValid = await bcrypt.compare(credentials.passwort, user.Passwort);
            if (!isValid) return null;

            return {
                id: user.ID,
                benutzername: user.Benutzername,
                vorname: user.person?.Vorname || null,
                name: user.person?.Name || null,
                email: user.person?.Email || null,
                person_id: user.Person_ID,
                vereine: user.person?.vereinszuordnung?.map(z => ({
                vereinId: z.Verein_ID,
                vereinName: z.verein.Name,
                subdomain: z.verein.Subdomain,
                rolle: z.Rolle
                })) || []
            };
            } catch (error) {
            console.error('Fehler in authorize:', error);
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
            token.id = user.id;
            token.name = user.vorname || user.benutzername || user.name;
            token.email = user.email || null;
            token.person_id = user.person_id;
            token.user = user;

            if (user.vereine?.length === 1) {
            token.user.aktuellerVerein = user.vereine[0].vereinId;
            }
        }
        return token;
    },
    async session({ session, token }) {
        session.user = token.user || {
        id: token.id,
        name: token.name,
        email: token.email,
        person_id: token.person_id
        };
        return session;
        }
    },
    debug: process.env.NODE_ENV !== 'production'
};

export default (req, res) => NextAuth(req, res, authOptions);
