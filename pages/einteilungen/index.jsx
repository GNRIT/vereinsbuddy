import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';

export default function EinteilungenListe({ einteilungen }) {
    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Einteilungen</h1>
            <Link href="/einteilungen/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neue Einteilung
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Einsatz_ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dienstabend_ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FF-Mitglied_ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fahrzeug_ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Einheit_ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {einteilungen.map((einteilung) => (
                    <tr key={einteilung.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {einteilung.ID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {einteilung.einsatz?.Titel || 'Kein Einsatz'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {einteilung.dientsabend?.Datum ? new Date(einteilung.dientsabend.Datum).toLocaleDateString() : 'Kein Dienstabend'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {einteilung.ff_mitglied?.Vorname} {einteilung.ff_mitglied?.Name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {einteilung.fahrzeug?.Kennzeichen || 'Kein Fahrzeug'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {einteilung.einheit?.Name || 'Keine Einheit'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/einteilungen/${einteilung.ID}/bearbeiten`}>
                        <span className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</span>
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
    const einteilungen = await db2.einteilung.findMany({
        include: {
        einsatz: true,
        dientsabend: true,
        ff_mitglied: true,
        fahrzeug: true,
        einheit: true,
        },
        orderBy: {
        ID: 'desc',
        },
    })

    return {
        props: {
        einteilungen: JSON.parse(JSON.stringify(einteilungen)),
        },
    }
}