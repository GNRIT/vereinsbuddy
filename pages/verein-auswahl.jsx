import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function VereinAuswahl() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {

        if (status === 'authenticated') {

            if (session?.user?.vereine?.length === 1) {
                router.push(`/vereine/${session.user.vereine[0].verein_id}`);
            }
        }

        else if (status === 'unauthenticated') {
            router.push('/auth/login');
        }
    }, [status, session, router]);

    if (status === 'loading') {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <p>Lade Benutzerdaten...</p>
                </div>
            </div>
        );
    }

 
    if (!session || !session.user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <p>Fehler: Keine Benutzerdaten gefunden.</p>
                    <button 
                        onClick={() => signOut()}
                        className="mt-4 text-blue-600 hover:text-blue-800"
                    >
                        Zurück zur Anmeldung
                    </button>
                </div>
            </div>
        );
    }


    const handleVereinSelect = (verein_id) => {

        localStorage.setItem('selectedVerein', verein_id);

        router.push(`/vereine/${verein_id}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Willkommen, {session.user.vorname}!
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Bitte wählen Sie einen Verein aus
                    </p>
                </div>

                <div className="mt-8 space-y-6">
                    {session.user.vereine?.length > 0 ? (
                        <div className="space-y-4">
                            {session.user.vereine.map((verein) => (
                                <div
                                    key={verein.verein_id}
                                    onClick={() => handleVereinSelect(verein.verein_id)}
                                    className="cursor-pointer bg-white py-4 px-6 border border-gray-200 rounded-lg shadow-sm hover:border-blue-500 hover:ring-1 hover:ring-blue-500 transition duration-150 ease-in-out"
                                >
                                    <h3 className="text-lg font-medium text-gray-900">
                                        {verein.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Rolle: {verein.rolle === 'admin' ? (
                                            <span className="text-blue-600">Administrator</span>
                                        ) : (
                                            <span>Mitglied</span>
                                        )}
                                    </p>
                                    <Link href={`/vereine/${verein.verein_id}`}>
                                    <span className="text-indigo-600 hover:text-indigo-900">Auswählen</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="text-gray-500">
                                Sie sind keinem Verein zugeordnet.
                            </p>
                        </div>
                    )}

                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => signOut({ callbackUrl: '/auth/login' })}
                            className="text-sm font-medium text-gray-600 hover:text-gray-900"
                        >
                            Abmelden
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}