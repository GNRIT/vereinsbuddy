import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import Link from 'next/link';

export default function VereinszuordnungenListe({ zuordnungen }) {
    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Vereinszuordnungen</h1>
            <Link href="/vereinszuordnungen/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neue Zuordnung
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitglied</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verein</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rolle</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Erstellt am</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {zuordnungen.map((zuordnung) => 
                    <tr key={zuordnung.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{zuordnung.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                        {zuordnung.person.Vorname} {zuordnung.person.Name}
                        </div>
                        <div className="text-sm text-gray-500">{zuordnung.person.Email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {zuordnung.verein.Name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {zuordnung.Rolle === 'admin' ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                            Admin
                        </span>
                        ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Mitglied
                        </span>
                        )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(zuordnung.Erstellt_am).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/vereinszuordnungen/${zuordnung.ID}/bearbeiten`}>
                        <span className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</span>
                        </Link>
                        {/*<Link href={`/vereinszuordnungen/${zuordnung.ID}`}>
                        <span className="text-blue-600 hover:text-blue-900">Ansehen</span>
                        </Link>*/}
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export async function getServerSideProps() {
    const zuordnungen = await db1.vereinszuordnung.findMany({
        include: {
        person: true,
        verein: true,
        },
        orderBy: {
        Erstellt_am: 'desc',
        },
    })

    return {
        props: {
        zuordnungen: JSON.parse(JSON.stringify(zuordnungen)),
        },
    }
}