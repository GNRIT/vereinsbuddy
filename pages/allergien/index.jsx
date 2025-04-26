import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function AllergieListe({ allergien }) {
    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Allergieverwaltung</h1>
            <Link href="/allergien/neu">
                <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neue Allergie
                </a>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitglied</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allergie</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beschreibung</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {allergien.map((allergie) => (
                    <tr key={allergie.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                        {allergie.ff_mitglied?.Vorname} {allergie.ff_mitglied?.Name}
                        </div>
                        <div className="text-sm text-gray-500">
                        {allergie.jf_mitglied?.Vorname} {allergie.jf_mitglied?.Name}
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{allergie.Allergie}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{allergie.Beschreibung}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/allergien/${allergie.id}/bearbeiten`}>
                        <a className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</a>
                        </Link>
                        <Link href={`/allergien/${allergie.id}/loeschen`}>
                        <a className="text-red-600 hover:text-red-900">Löschen</a>
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

export async function getServerSideProps() {
    const allergien = await db2.allergie.findMany({
        include: {
        ff_mitglied: true,
        jf_mitglied: true
        },
        orderBy: {
        Allergie: 'asc'
        }
    })

    return {
        props: {
        allergien: JSON.parse(JSON.stringify(allergien))
        }
    }
}