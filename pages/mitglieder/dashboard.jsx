import { vereinDbPrisma as db2 } from '@/lib/prisma'
import { getSession } from 'next-auth/react'
export default function MitgliedDashboard({ mitglied, teilnahmen, eintrittsdatum }) {
    const aktiveJahre = Math.floor((new Date() - new Date(eintrittsdatum)) / (1000 * 60 * 60 * 24 * 365))

    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Mein Dashboard</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Profil bearbeiten
            </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-800">Aktive Zeit</h2>
                <p className="text-3xl font-bold text-blue-600 mt-2">{aktiveJahre} Jahre</p>
                <p className="text-sm text-blue-500 mt-1">Eintritt: {new Date(eintrittsdatum).toLocaleDateString()}</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-green-800">Einsätze ({new Date().getFullYear()})</h2>
                <p className="text-3xl font-bold text-green-600 mt-2">
                {teilnahmen.filter(t => t.veranstaltung.Typ === 'einsatz').length}
                </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-purple-800">Übungen ({new Date().getFullYear()})</h2>
                <p className="text-3xl font-bold text-purple-600 mt-2">
                {teilnahmen.filter(t => t.veranstaltung.Typ === 'dienstabend').length}
                </p>
            </div>
            </div>

            <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Meine letzten Teilnahmen</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Veranstaltung</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typ</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {teilnahmen.slice(0, 10).map((teilnahme) => (
                    <tr key={teilnahme.ID}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(teilnahme.Erstellt_am).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {teilnahme.veranstaltung.Titel}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            teilnahme.veranstaltung.Typ === 'einsatz' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                            {teilnahme.veranstaltung.Typ}
                        </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>

            <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Meine Daten</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Persönliche Informationen</h3>
                    <div className="space-y-2">
                    <p><span className="font-medium">Name:</span> {mitglied.Vorname} {mitglied.Name}</p>
                    <p><span className="font-medium">Geburtsdatum:</span> {mitglied.Geburtsdatum ? new Date(mitglied.Geburtsdatum).toLocaleDateString() : '-'}</p>
                    <p><span className="font-medium">E-Mail:</span> {mitglied.Email || '-'}</p>
                    <p><span className="font-medium">Telefon:</span> {mitglied.HandyNr || '-'}</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Adresse</h3>
                    <div className="space-y-2">
                    <p>{mitglied.Strasse} {mitglied.Hausnummer}</p>
                    <p>{mitglied.Postleitzahl} {mitglied.Ort}</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
    }

    export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
        }
    }

    const mitglied = await db2.mitglied.findUnique({
        where: {
        ID: session.user.personId
        }
    })

    const teilnahmen = await db2.teilnahme.findMany({
        where: {
        Mitglied_ID: session.user.personId
        },
        include: {
        veranstaltung: true
        },
        orderBy: {
        Erstellt_am: 'desc'
        }
    })

    return {
        props: {
        mitglied: JSON.parse(JSON.stringify(mitglied)),
        teilnahmen: JSON.parse(JSON.stringify(teilnahmen)),
        eintrittsdatum: mitglied.Eintrittsdatum.toISOString()
        }
    }
}