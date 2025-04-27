import Link from 'next/link'
import Layout from '../../components/Layout'
import { vereinDbPrisma as prisma } from '../../lib/prisma'

export default function TeilnahmenListe({ teilnahmen }) {
    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Teilnahmen</h1>
            <Link href="/teilnahmen/neu">
                <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neue Teilnahme
                </a>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitglied</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Veranstaltung</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typ</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Erstellt am</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {teilnahmen.map((teilnahme) => (
                    <tr key={teilnahme.ID}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                            {teilnahme.mitglied.Vorname} {teilnahme.mitglied.Name}
                        </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {teilnahme.veranstaltung.Titel}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        teilnahme.Typ === 'einsatz' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                        {teilnahme.Typ}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(teilnahme.Erstellt_am).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/teilnahmen/${teilnahme.ID}/bearbeiten`}>
                        <a className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</a>
                        </Link>
                        <Link href={`/teilnahmen/${teilnahme.ID}`}>
                        <a className="text-blue-600 hover:text-blue-900">Ansehen</a>
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
    const teilnahmen = await prisma.teilnahme.findMany({
        include: {
        mitglied: true,
        veranstaltung: true
        },
        orderBy: {
        Erstellt_am: 'desc',
        },
    })

    return {
        props: {
        teilnahmen: JSON.parse(JSON.stringify(teilnahmen)),
        },
    }
}