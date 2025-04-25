import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AuthRedirect() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'authenticated') {
            if (session.user.vereine.length === 1) {
                // Direkt zum einzigen Verein weiterleiten
                router.push(`/verein/${session.user.vereine[0].vereinId}`)
            } else {
                // Zur Vereinsauswahl wenn mehrere Vereine
                router.push('/verein-auswahl')
            }
        } else if (status === 'unauthenticated') {
            router.push('/auth/login')
        }
    }, [status, router, session])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Anmeldung erfolgreich</h1>
                <p>Sie werden weitergeleitet...</p>
            </div>
        </div>
    )
}