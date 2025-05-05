import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useVerein } from '../context/VereinContext';
export default function Layout() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const { aktiverVerein, vereinWechseln } = useVerein();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isVereinMenuOpen, setIsVereinMenuOpen] = useState(false);

    if (status === 'loading') {
        return <div>Laden...</div>;
    }

    if (!session && router.pathname !== '/auth/login' && router.pathname !== 'verein-auswahl') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Zugriff verweigert</h1>
                    <p className="mb-4">Sie müssen sich anmelden, um diese Seite zu sehen.</p>
                    <Link href="/auth/login">
                        <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Zur Anmeldung
                        </span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <h1 className="text-xl font-bold text-gray-900">
                                    {aktiverVerein ? aktiverVerein.vereinName : 'Vereinsbuddy'}
                                </h1>
                            </div>
                            {session && aktiverVerein && (
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">

                                    <Link href="/admin">
                                        <span className={`${router.pathname === '/admin' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                            Dashboard
                                        </span>
                                    </Link>

                                    <Link href="/einteilungen">
                                        <span className={`${router.pathname.startsWith('/einteilungen') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                            Einteilungen
                                        </span>
                                    </Link>

                                    <Link href="/mitglieder">
                                        <span className={`${router.pathname === '/mitglieder' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                            Mitglieder
                                        </span>
                                    </Link>

                                    {session.user.rolle === 'admin' && (
                                    <Link href="/benutzerkonten">
                                        <a className={`${router.pathname.startsWith('/benutzerkonten') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        Benutzerkonten
                                        </a>
                                    </Link>
                                    )}

                                    <Link href="/vereinszuordnungen">
                                    <a className={`${router.pathname.startsWith('/vereinszuordnungen') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        Vereinszuordnungen
                                    </a>
                                    </Link>

                                    <Link href="/allergien">
                                    <span className={`${router.pathname.startsWith('/allergien') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        Allergien
                                    </span>
                                    </Link>

                                    <Link href="/dienstabend">
                                    <span className={`${router.pathname.startsWith('/dienstabend') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        Dienstabend
                                    </span>
                                    </Link>

                                    <Link href="/dienstgrade">
                                    <span className={`${router.pathname.startsWith('/dienstgrade') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        Dienstgrad
                                    </span>
                                    </Link>

                                    {/*<Link href="/einheiten">
                                    <span className={`${router.pathname.startsWith('/einheiten') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        Einheiten
                                    </span>
                                    </Link>

                                    <Link href="/einsatz">
                                    <span className={`${router.pathname.startsWith('/einsatz') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        Einsätze
                                    </span>
                                    </Link>

                                    <Link href="/erziehungsberechtigte">
                                    <span className={`${router.pathname.startsWith('/erziehungsberechtigte') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        Erziehungsberechtigte
                                    </span>
                                    </Link>

                                    <Link href="/fahrzeuge">
                                    <span className={`${router.pathname.startsWith('/fahrzeuge') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        Fahrzeuge
                                    </span>
                                    </Link>

                                    <Link href="/ff-mitglieder">
                                    <span className={`${router.pathname.startsWith('/ff-mitglieder') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        FF-Mitglieder
                                    </span>
                                    </Link>

                                    <Link href="/jf-mitglieder">
                                        <span className={`${router.pathname.startsWith('/jf-mitglieder') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                            JF-Mitglieder
                                        </span>
                                    </Link>

                                    <Link href="/lehrgang">
                                    <span className={`${router.pathname.startsWith('/lehrgang') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                        Lehrgänge
                                    </span>
                                    </Link>

                                    <Link href="/funktion_ff">
                                        <span className={`${router.pathname.startsWith('/funktion_ff') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                            Funktion-FF
                                        </span>
                                    </Link>

                                    <Link href="/lehrgangzuordnung">
                                        <span className={`${router.pathname.startsWith('/lehrgangzuordnung') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                            Lehrgangzuordnung
                                        </span>
                                    </Link>

                                    <Link href="/mitglied-funktionen">
                                        <span className={`${router.pathname.startsWith('/mitglied-funktionen') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                            Mitglied-Funktionen
                                        </span>
                                    </Link>

                                    <Link href="/mitglied-login">
                                        <span className={`${router.pathname.startsWith('/mitglied-login') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                            Mitglied-Login
                                        </span>
                                    </Link>

                                    <Link href="/funktion_jf">
                                        <span className={`${router.pathname.startsWith('/funktion_jf') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                            Funktion-JF
                                        </span>
                                    </Link>

                                    <Link href="/teilnahmen">
                                        <span className={`${router.pathname.startsWith('/teilnahmen') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                                            Teilnahmen
                                        </span>
                                    </Link>*/}
                                </div>
                            )}
                        </div>
                        
                        {session && (
                            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                                {/* Vereinsauswahl Dropdown */}
                                {aktiverVerein && session.user.vereine.length > 1 && (
                                    <div className="relative ml-3">
                                        <div>
                                            <button
                                                type="button"
                                                className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                id="verein-menu"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                                onClick={() => setIsVereinMenuOpen(!isVereinMenuOpen)}
                                            >
                                                <span className="sr-only">Verein wechseln</span>
                                                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    {aktiverVerein.vereinName}
                                                    {aktiverVerein.rolle === 'admin' && (
                                                        <span className="ml-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">Admin</span>
                                                    )}
                                                </div>
                                            </button>
                                        </div>

                                        {isVereinMenuOpen && (
                                            <div
                                                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="verein-menu"
                                            >
                                                <div className="py-1" role="none">
                                                    <p className="block px-4 py-2 text-sm text-gray-700 border-b">Verein wechseln</p>
                                                    {session.user.vereine.map((verein) => (
                                                        <button
                                                            key={verein.vereinId}
                                                            onClick={() => {
                                                                vereinWechseln(verein.vereinId);
                                                                setIsVereinMenuOpen(false);
                                                            }}
                                                            className={`${aktiverVerein.vereinId === verein.vereinId ? 'bg-gray-100' : ''} w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                                                            role="menuitem"
                                                        >
                                                            <div className="flex justify-between items-center">
                                                                <span>{verein.vereinName}</span>
                                                                {verein.rolle === 'admin' && (
                                                                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">Admin</span>
                                                                )}
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Benutzermenü Dropdown */}
                                <div className="relative ml-3">
                                    <div>
                                        <button
                                            type="button"
                                            className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            id="user-menu"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        >
                                            <span className="sr-only">Benutzermenü öffnen</span>
                                            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                                {session.user?.vorname?.charAt(0)}{session.user?.name?.charAt(0)}
                                            </div>
                                        </button>
                                    </div>

                                    {isUserMenuOpen && (
                                        <div
                                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="user-menu"
                                        >
                                            <div className="py-1" role="none">
                                                <p className="block px-4 py-2 text-sm text-gray-700 border-b">
                                                    {session.user?.vorname} {session.user?.name}
                                                </p>
                                                <Link href={`/mitglieder/${session.user.person_id}`}>
                                                    <span
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        role="menuitem"
                                                        onClick={() => setIsUserMenuOpen(false)}
                                                    >
                                                        Mein Profil
                                                    </span>
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        signOut();
                                                        setIsUserMenuOpen(false);
                                                    }}
                                                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t"
                                                    role="menuitem"
                                                >
                                                    Abmelden
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}