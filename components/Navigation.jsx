import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useVerein } from '../context/VereinContext';

export default function Navigation() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const { aktiverVerein } = useVerein();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    if (status === 'loading') {
        return <div>Laden...</div>;
    }

    if (!session && router.pathname !== '/auth/login' && router.pathname !== 'verein-auswahl') {
        return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Zugriff verweigert</h1>
            <p className="mb-4">Sie müssen sich anmelden, um diese Seite zu sehen.</p>
            <Link
                href="/auth/login"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Zur Anmeldung
            </Link>
            </div>
        </div>
        );
    }

    const navItems = [
        { href: '/einteilungen', label: 'Einteilungen   ' },
        { href: '/mitglieder', label: 'Mitglieder   ' },
        { href: '/benutzerkonten', label: 'Benutzerkonten   ', admin: true },
        { href: '/vereinszuordnungen', label: 'Vereinszuordnungen   ' },
        { href: '/allergien', label: 'Allergien   ' },
        { href: '/dienstabend', label: 'Dienstabend   ' },
        { href: '/dienstgrade', label: 'Dienstgrad   ' },
        { href: '/einheiten', label: 'Einheiten   ' },
        { href: '/einsatz', label: 'Einsätze   ' },
        { href: '/jf_erziehungsberechtigter', label: 'Erziehungsberechtigte   ' },
        { href: '/fahrzeuge', label: 'Fahrzeuge   ' },
        { href: '/ff-mitglieder', label: 'FF-Mitglieder   ' },
        { href: '/jf-mitglieder', label: 'JF-Mitglieder   ' },
        { href: '/lehrgang', label: 'Lehrgänge   ' },
        { href: '/funktion_ff', label: 'Funktion-FF   ' },
        { href: '/lehrgangzuordnung', label: 'Lehrgangzuordnung   ' },
        { href: '/mitglied-funktionen', label: 'Mitglied-Funktionen   ' },
        { href: '/mitglied-login', label: 'Mitglied-Login   ' },
        { href: '/funktion_jf', label: 'Funktion-JF   ' },
        { href: '/teilnahmen', label: 'Teilnahmen   ' },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                    <h1 className="text-xl font-bold text-gray-900">
                    {aktiverVerein ? aktiverVerein.vereinName : 'Vereinsbuddy'}
                    </h1>
                </div>

                {session && aktiverVerein && (
                    <div className="flex items-center space-x-4">
                    {navItems.map(({ href, label, admin }) => {
                        if (admin && session.user.rolle !== 'admin') return null;
                        const isActive = router.pathname.startsWith(href);
                        return (
                            <Link key={href} href={href}>
                            <span
                                className={`${
                                isActive
                                    ? 'border-blue-500 text-gray-900'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                            >
                                {label}
                            </span>
                            </Link>
                        );
                        })}
                    </div>
                )}
                </div>

                {session && (
                <div className="hidden sm:flex sm:items-center space-x-4">
                    {/* Benutzer-Menü */}
                    <div className="relative">
                    <button
                        type="button"
                        className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    >
                        <span className="sr-only">Benutzermenü öffnen</span>
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        {session.user?.vorname?.charAt(0)}
                        {session.user?.name?.charAt(0)}
                        </div>
                    </button>

                    {isUserMenuOpen && (
                        <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                        role="menu"
                        >
                        <div className="py-1">
                            <p className="block px-4 py-2 text-sm text-gray-700 border-b">
                            {session.user?.vorname} {session.user?.name}
                            </p>
                            <Link
                            href={`/mitglieder/${session.user.person_id}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsUserMenuOpen(false)}
                            >
                            Mein Profil
                            </Link>
                            <button
                            onClick={() => {
                                signOut();
                                setIsUserMenuOpen(false);
                            }}
                            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t"
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
