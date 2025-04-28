import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useVerein } from '../../context/VereinContext';

export default function VereinDetail({ verein }) {
    const { data: session } = useSession()
    const router = useRouter()
    const { aktiverVerein } = useVerein()

    /*if (!session) {
        return (
        <Layout>
            <div className="bg-white shadow rounded-lg p-6">
            <p>Sie müssen sich anmelden, um diese Seite zu sehen.</p>
            </div>
        </Layout>
        )
    }*/

    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Verein: {verein.Name}</h1>
            <button
                onClick={() => router.push('/verein-auswahl')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
            >
                Verein wechseln
            </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Kontaktdaten</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Adresse</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {verein.Strasse} {verein.Hausnummer}<br />
                    {verein.Postleitzahl} {verein.Ort}
                    </p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Subdomain</label>
                    <p className="mt-1 text-sm text-gray-900">{verein.Subdomain}</p>
                </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Ihre Rolle</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Berechtigungen</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {aktiverVerein?.rolle === 'admin' ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        Administrator
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
            </div>
        </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params
    const verein = await db1.verein.findUnique({
        where: {
            ID: parseInt(id),
        },
    })

    if (!verein) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        verein: JSON.parse(JSON.stringify(verein)),
        },
    }
}