import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import Link from 'next/link';

export default function BenutzerkontenListe({ benutzerkonten }) {
    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Benutzerkonten</h1>
            <Link href="/benutzerkonten/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neues Benutzerkonto
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benutzername</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Person</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {benutzerkonten.map((konto) => (
                    <tr key={konto.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{konto.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{konto.Benutzername}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {konto.Aktiv ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Aktiv
                        </span>
                        ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Inaktiv
                        </span>
                        )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {konto.person.Vorname} {konto.person.Name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/benutzerkonten/${konto.ID}/bearbeiten`}>
                        <span className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</span>
                        </Link>
                        {/*<Link href={`/benutzerkonten/${konto.ID}`}>
                        <span className="text-blue-600 hover:text-blue-900">Ansehen</span>
                        </Link>*/}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export async function getServerSideProps() {
    const benutzerkonten = await db1.benutzerkonto.findMany({
        include: {
        person: true
        },
        orderBy: {
        ID: 'asc',
        },
    })

    return {
        props: {
        benutzerkonten: JSON.parse(JSON.stringify(benutzerkonten)),
        },
    }
}