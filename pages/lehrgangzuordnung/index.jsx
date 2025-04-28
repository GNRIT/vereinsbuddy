import { vereinDbPrisma as db2 } from '@/lib/prisma'
import Link from 'next/link'
export default function LehrgangsZuordnungen({ zuordnungen }) {
    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Lehrgangszuordnungen</h1>
            <Link href="/lehrgaenge/neu">
                <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neue Zuordnung
                </a>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitglied</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lehrgang</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum bestanden</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {zuordnungen.map((zuordnung) => (
                    <tr key={zuordnung.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                        {zuordnung.ff_mitglied.Vorname} {zuordnung.ff_mitglied.Name}
                        </div>
                        <div className="text-sm text-gray-500">
                        {zuordnung.ff_mitglied.Mitgliedsnummer}
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {zuordnung.lehrgang.Bezeichnung}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {zuordnung.Datum_bestanden ? new Date(zuordnung.Datum_bestanden).toLocaleDateString() : 'Nicht bestanden'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/lehrgaenge/${zuordnung.id}/bearbeiten`}>
                        <a className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</a>
                        </Link>
                        <Link href={`/lehrgaenge/${zuordnung.id}/loeschen`}>
                        <a className="text-red-600 hover:text-red-900">Löschen</a>
                        </Link>
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
    const zuordnungen = await db2.ff_mitglied_lehrgang.findMany({
        include: {
        ff_mitglied: true,
        lehrgang: true
        },
        orderBy: {
        Datum_bestanden: 'desc'
        }
    })

    return {
        props: {
        zuordnungen: JSON.parse(JSON.stringify(zuordnungen))
        }
    }
}