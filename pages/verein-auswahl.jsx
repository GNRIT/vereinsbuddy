import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function VereinAuswahl() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated' && session?.user?.vereine?.length === 1) {
            router.push(`/verein/${session.user.vereine[0].Verein_ID}`);
        }
    }, [session, status, router]);

    if (status === 'loading') {
        return (
            <Layout>
                <div className="flex items-center justify-center min-h-screen">
                    <p>Lade Benutzerdaten...</p>
                </div>
            </Layout>
        );
    }

    if (!session || !session.user) {
        return (
            <Layout>
                <div className="flex items-center justify-center min-h-screen">
                    <p>Fehler: Keine Session gefunden.</p>
                </div>
            </Layout>
        );
    }

    const handleVereinSelect = (vereinId) => {
        router.push(`/verein/${vereinId}`);
    };

    return (
        <Layout>
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
                                        key={verein.Verein_ID}
                                        onClick={() => handleVereinSelect(verein.Verein_ID)}
                                        className="cursor-pointer bg-white py-4 px-6 border border-gray-200 rounded-lg shadow-sm hover:border-blue-500 hover:ring-1 hover:ring-blue-500 transition duration-150 ease-in-out"
                                    >
                                        <h3 className="text-lg font-medium text-gray-900">
                                            {verein.Name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Rolle: {verein.rolle === 'admin' ? 'Administrator' : 'Mitglied'}
                                        </p>
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
                                onClick={() => signOut()}
                                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                            >
                                Abmelden
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
