import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { useRouter } from 'next/router';

export default function EinsatzDetail({ einsatz }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Laden...</div>
    }

    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Einsatz: {einsatz.Einsarznummer}</h1>
            <div>
                <button
                onClick={() => router.push(`/einsatz/${einsatz.ID}/bearbeiten`)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded mr-2"
                >
                Bearbeiten
                </button>
                <button
                onClick={() => router.push('/einsatz')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
                >
                Zurück
                </button>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Einsatzdetails</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Einsarznummer</label>
                    <p className="mt-1 text-sm text-gray-900">{einsatz.Einsarznummer}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Beschreibung</label>
                    <p className="mt-1 text-sm text-gray-900 whitespace-pre-line">
                    {einsatz.Beschreibung || 'Keine Beschreibung vorhanden'}
                    </p>
                </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Zeit und Ort</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Startdatum</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {new Date(einsatz.Datum_Anfang).toLocaleString()}
                    </p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Enddatum</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {einsatz.EndDatum ? new Date(einsatz.Datum_Ende).toLocaleString() : 'Kein Enddatum'}
                    </p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Ort</label>
                    <p className="mt-1 text-sm text-gray-900">{einsatz.Ort}</p>
                </div>
                </div>
            </div>
            </div>

            <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Status</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
                {new Date(einsatz.Datum_Anfang) > new Date() ? (
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Geplant
                </span>
                ) : (
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Abgeschlossen
                </span>
                )}
            </div>
            </div>
        </div>
        </div>
    )
    }

    export async function getServerSideProps(context) {
    const { id } = context.params

    const einsatz = await db2.einsatz.findUnique({
        where: {
        ID: parseInt(id)
        }
    })

    if (!einsatz) {
        return {
        notFound: true
        }
    }

    return {
        props: {
        einsatz: JSON.parse(JSON.stringify(einsatz))
        }
    }
}