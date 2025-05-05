import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AuthRedirect() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'authenticated' && session?.user) {
            const vereine = session.user.vereine || [];
    
            if (vereine.length === 1 && vereine[0].Verein_ID) {
                // Direkt zum einzigen Verein weiterleiten
                router.push(`/vereine/${vereine[0].Verein_ID}`);
            } else if (vereine.length > 1) {
                // Wenn mehrere Vereine vorhanden
                router.push('/verein-auswahl');
            } else {
                // Wenn keine Vereine vorhanden oder fehlerhafte Daten
                console.error('Keine gültigen Vereinsdaten gefunden.');
            }
        } /*else if (status === 'unauthenticated') {
            router.push('/auth/login');
        }*/
    }, [status, router, session]);
    

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Anmeldung erfolgreich</h1>
                <p>Sie werden weitergeleitet...</p>
            </div>
        </div>
    )
}