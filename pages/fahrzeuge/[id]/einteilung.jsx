import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function FahrzeugEinteilung({ fahrzeug, einsaetze }) {
    const router = useRouter()

    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
                Einteilung für Fahrzeug: {fahrzeug.Kennzeichen || 'Ohne Kennzeichen'}
            </h1>
            <button
                onClick={() => router.push('/fahrzeuge')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
            >
                Zurück
            </button>
            </div>

            <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Aktuelle Einsätze</h2>
            {einsaetze.length > 0 ? (
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Einsatz</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ort</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {einsaetze.map((einsatz) => (
                        <tr key={einsatz.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                            {new Date(einsatz.StartDatum).toLocaleDateString()}
                            </div>
                            <div className="text-sm text-gray-500">
                            {new Date(einsatz.StartDatum).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{einsatz.Titel}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{einsatz.Beschreibung}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{einsatz.Ort}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                            onClick={() => {
                                // Hier würde die Logik zum Entfernen der Einteilung stehen
                                alert('Einteilung entfernen Funktion würde hier implementiert werden')
                            }}
                            className="text-red-600 hover:text-red-900"
                            >
                            Entfernen
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            ) : (
                <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500">Dieses Fahrzeug ist aktuell keinen Einsätzen zugeordnet.</p>
                </div>
            )}
            </div>

            <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Fahrzeug zu Einsatz hinzufügen</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2">
                    <label htmlFor="einsatz" className="block text-sm font-medium text-gray-700">Einsatz auswählen</label>
                    <select
                    id="einsatz"
                    name="einsatz"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                    <option>Bitte wählen...</option>
                    {/* Hier würden verfügbare Einsätze geladen werden */}
                    <option>Brand in Musterstraße (15.04.2025)</option>
                    <option>Technische Hilfeleistung (18.04.2025)</option>
                    </select>
                </div>
                <div className="flex items-end">
                    <button
                    type="button"
                    onClick={() => {
                        // Hier würde die Logik zum Hinzufügen der Einteilung stehen
                        alert('Fahrzeug zu Einsatz hinzufügen Funktion würde hier implementiert werden')
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                    >
                    Hinzufügen
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
    }

    export async function getServerSideProps(context) {
    const { id } = context.params
    const session = await getSession(context)

    if (!session) {
        return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
        }
    }

    const parsedId = parseInt(id);
    if (!parsedId || isNaN(parsedId)) {
        return {
            notFound: true,
        };
    }

    const fahrzeug = await db2.fahrzeug.findUnique({
        where: {
        ID: parsedId,
        },
    })

    if (!fahrzeug) {
        return {
        notFound: true,
        }
    }

    // Hier würden die tatsächlichen Einsätze für das Fahrzeug geladen werden
    const einsaetze = await db2.einsatz.findMany({
        where: {
        Einteilung: {
            some: {
            Fahrzeug_ID: parseInt(id),
            },
        },
        },
        orderBy: {
        StartDatum: 'desc',
        },
    })

    return {
        props: {
        fahrzeug: JSON.parse(JSON.stringify(fahrzeug)),
        einsaetze: JSON.parse(JSON.stringify(einsaetze)),
        },
    }
}