import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import { vereinDbPrisma as prisma } from '../../../../lib/prisma'

export default function ErziehungsberechtigterDetail({ data }) {
    const router = useRouter()

    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Erziehungsberechtigter</h1>
            <div>
                <button
                onClick={() => router.push(`/jugend/erziehungsberechtigte/${data.ID}/bearbeiten`)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded mr-2"
                >
                Bearbeiten
                </button>
                <button
                onClick={() => router.push('/jugend/erziehungsberechtigte')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
                >
                Zurück
                </button>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Jugendmitglied</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Name</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {data.jf_mitglied.Vorname} {data.jf_mitglied.Name}
                    </p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">ID</label>
                    <p className="mt-1 text-sm text-gray-900">{data.JF_Mitglied_ID}</p>
                </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Erziehungsberechtigter</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Name</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {data.person.Vorname} {data.person.Name}
                    </p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">ID</label>
                    <p className="mt-1 text-sm text-gray-900">{data.Person_ID}</p>
                </div>
                </div>
            </div>
            </div>

            <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Metadaten</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-500">Erstellt am</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {data.Erstellt_am ? new Date(data.Erstellt_am).toLocaleString() : '-'}
                    </p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-500">Geändert am</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {data.Geaendert_am ? new Date(data.Geaendert_am).toLocaleString() : '-'}
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Layout>
    )
    }

    export async function getServerSideProps(context) {
    const { id } = context.params
    const data = await prisma.jf_erziehungsberechtigter.findUnique({
        where: { ID: parseInt(id) },
        include: {
        jf_mitglied: true,
        person: true
        }
    })

    if (!data) {
        return {
        notFound: true
        }
    }

    return {
        props: {
        data: JSON.parse(JSON.stringify(data))
        }
    }
}