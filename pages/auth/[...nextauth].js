import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
const { db1 } = require('@/lib/prisma')

export const authOptions = {
    providers: [
        CredentialsProvider({
        name: 'Credentials',
        credentials: {
            benutzername: { label: "Benutzername", type: "text" },
            passwort: { label: "Passwort", type: "password" }
        },
        async authorize(credentials, req) {
            const user = await db1.benutzerkonto.findUnique({
            where: {
                Benutzername: credentials.benutzername
            },
            include: {
                Person: {
                include: {
                    Vereinszuordnung: {
                    include: {
                        Verein: true
                    }
                    }
                }
                }
            }
            })

            if (!user) {
            throw new Error('Benutzername oder Passwort falsch')
            }

            // Hier sollte eine echte Passwortüberprüfung stattfinden (bcrypt etc.)
            const isValid = user.Passwort === credentials.passwort

            if (!isValid) {
            throw new Error('Benutzername oder Passwort falsch')
            }

            return {
            id: user.id,
            benutzername: user.Benutzername,
            personId: user.Person_ID,
            vorname: user.Person.Vorname,
            name: user.Person.Name,
            vereine: user.Person.Vereinszuordnung.map(zuordnung => ({
                vereinId: zuordnung.Verein_ID,
                vereinName: zuordnung.Verein.Name,
                rolle: zuordnung.Rolle
            })),
            aktuellerVerein: user.Person.Vereinszuordnung.length > 0
                ? user.Person.Vereinszuordnung[0].Verein_ID
                : null
            }
        }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
        if (user) {
            token.user = user
        }
        return token
        },
        async session({ session, token }) {
        session.user = token.user
        return session
        }
    },
    pages: {
        signIn: '/auth/login',
        error: '/auth/login'
    }
}

export default NextAuth(authOptions)