import { vereinsbuddyPrisma as db1 } from '@/lib/prisma'
import { useRouter } from 'next/router'

export default function MitgliedDetail({ mitglied }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Laden...</div>
    }

    // Formatieren des Bestehensdatums für Lehrgänge
    const formatLehrgangDatum = (datum) => {
        return datum ? new Date(datum).toLocaleDateString('de-DE') : 'nicht bestanden'
    }

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
                {mitglied.Vorname} {mitglied.Name}
            </h1>
            <div className="flex space-x-2">
                <button
                onClick={() => router.push(`/mitglieder/${mitglied.ID}/bearbeiten`)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded"
                >
                Bearbeiten
                </button>
                <button
                onClick={() => router.push('/mitglieder')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
                >
                Zurück
                </button>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Persönliche Daten</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Vorname</label>
                    <p className="mt-1 text-sm text-gray-900">{mitglied.Vorname}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Nachname</label>
                    <p className="mt-1 text-sm text-gray-900">{mitglied.Name}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Geburtsdatum</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {mitglied.Geburtsdatum ? new Date(mitglied.Geburtsdatum).toLocaleDateString('de-DE') : '-'}
                    </p>
                </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Kontaktdaten</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">E-Mail</label>
                    <p className="mt-1 text-sm text-gray-900">{mitglied.Email || '-'}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Telefon</label>
                    <p className="mt-1 text-sm text-gray-900">{mitglied.HandyNr || '-'}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Adresse</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {mitglied.Strasse && mitglied.Hausnummer ? `${mitglied.Strasse} ${mitglied.Hausnummer}` : '-'}
                    <br />
                    {mitglied.Postleitzahl && mitglied.Ort ? `${mitglied.Postleitzahl} ${mitglied.Ort}` : '-'}
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* Lehrgänge Abschnitt */}
            {mitglied.ff_mitglied?.[0]?.ff_mitglied_lehrgang?.length > 0 && (
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Lehrgänge</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lehrgang</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Abkürzung</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bestanden am</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mitglied.ff_mitglied[0].ff_mitglied_lehrgang.map((lehrgang) => (
                        <tr key={lehrgang.ID}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {lehrgang.lehrgang.Beschreibung}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {lehrgang.lehrgang.Abk_rzung}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatLehrgangDatum(lehrgang.Datum_bestanden)}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            )}

            {mitglied.Vereinszuordnung && mitglied.Vereinszuordnung.length > 0 && (
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Vereinszuordnung</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Verein</label>
                    <p className="mt-1 text-sm text-gray-900">{mitglied.Vereinszuordnung[0].Verein.Name}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Rolle</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {mitglied.Vereinszuordnung[0].Rolle === 'admin' ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        Admin
                        </span>
                    ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Mitglied
                        </span>
                    )}
                    </p>
                </div>
                </div>
            </div>
            )}
        </div>
        </div>
    )
    }

    export async function getServerSideProps(context) {
    const { id } = context.params

    const parsedId = parseInt(id)
    if (!parsedId || isNaN(parsedId)) {
        return {
        notFound: true,
        }
    }

    // Mitglied mit allen relevanten Daten laden
    const mitglied = await db1.person.findUnique({
        where: {
        ID: parsedId,
        },
        include: {
        Vereinszuordnung: {
            include: {
            Verein: true,
            },
        },
        ff_mitglied: {
            include: {
            ff_mitglied_lehrgang: {
                include: {
                lehrgang: true,
                },
            },
            },
        },
        },
    })

    if (!mitglied) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        mitglied: JSON.parse(JSON.stringify(mitglied)),
        },
    }
}