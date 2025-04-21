import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === 'loading') {
        return <div>Laden...</div>
    }

    if (!session && router.pathname !== '/auth/login') {
        return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Zugriff verweigert</h1>
            <p className="mb-4">Sie müssen sich anmelden, um diese Seite zu sehen.</p>
            <Link href="/auth/login">
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Zur Anmeldung
                </a>
            </Link>
            </div>
        </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-xl font-bold text-gray-900">Vereinsbuddy</h1>
                </div>
                {session && (
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link href="/dashboard">
                        <a className={`${router.pathname === '/dashboard' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                        Dashboard
                        </a>
                    </Link>
                    <Link href="/mitglieder">
                        <a className={`${router.pathname.startsWith('/mitglieder') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                        Mitglieder
                        </a>
                    </Link>
                    <Link href="/einsatz">
                        <a className={`${router.pathname.startsWith('/einsatz') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                        Einsätze
                        </a>
                    </Link>
                    <Link href="/fahrzeuge">
                        <a className={`${router.pathname.startsWith('/fahrzeuge') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                        Fahrzeuge
                        </a>
                    </Link>
                    <Link href="/ausruestung">
                        <a className={`${router.pathname.startsWith('/ausruestung') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                        Ausrüstung
                        </a>
                    </Link>
                    </div>
                )}
                </div>
                {session && (
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <div className="ml-3 relative">
                    <div>
                        <button
                        type="button"
                        className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        id="user-menu"
                        aria-expanded="false"
                        aria-haspopup="true"
                        >
                        <span className="sr-only">Benutzermenü öffnen</span>
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            {session.user.vorname.charAt(0)}{session.user.name.charAt(0)}
                        </div>
                        </button>
                    </div>
                    </div>
                </div>
                )}
            </div>
            </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
        </main>
        </div>
    )
}