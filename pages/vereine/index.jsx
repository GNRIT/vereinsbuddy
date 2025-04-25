import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function VereinsListe({ vereine }) {
    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Vereinsverwaltung</h1>
            <Link href="/vereine/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neuen Verein erstellen
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subdomain</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {vereine.map((verein) => (
                    <tr key={verein.ID}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{verein.Name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                        {verein.Strasse} {verein.Hausnummer}
                        </div>
                        <div className="text-sm text-gray-500">
                        {verein.Postleitzahl} {verein.Ort}
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {verein.Subdomain}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/vereine/${verein.ID}/bearbeiten`}>
                        <span className="text-blue-600 hover:text-blue-900 mr-3">Bearbeiten</span>
                        </Link>
                        <Link href={`/vereine/${verein.ID}`}>
                        <span className="text-indigo-600 hover:text-indigo-900">Details</span>
                        </Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </Layout>
    )
    }

    export async function getServerSideProps(context) {
    const session = await getSession(context)

    /*if (!session) {
        return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
        }
    }*/

    // Nur Admins dürfen alle Vereine sehen
    /*const isAdmin = session.user.vereine.some(v => v.rolle === 'admin')
    if (!isAdmin) {
        return {
        redirect: {
            destination: '/dashboard',
            permanent: false,
        },
        }
    }*/

    const vereine = await db1.verein.findMany()

    return {
        props: {
        vereine: JSON.parse(JSON.stringify(vereine)),
        },
    }
}