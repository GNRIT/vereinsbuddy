import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';

export default function ErziehungsberechtigteListe({ erziehungsberechtigte }) {
    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Erziehungsberechtigte</h1>
            <Link href="/jugend/erziehungsberechtigte/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neuer Eintrag
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jugendmitglied</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Erziehungsberechtigter</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Erstellt am</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {erziehungsberechtigte.map((eb) => (
                    <tr key={eb.ID}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                        {eb.jf_mitglied.Vorname} {eb.jf_mitglied.Name}
                        </div>
                        <div className="text-sm text-gray-500">ID: {eb.JF_Mitglied_ID}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                        {eb.person.Vorname} {eb.person.Name}
                        </div>
                        <div className="text-sm text-gray-500">ID: {eb.Person_ID}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {eb.Erstellt_am ? new Date(eb.Erstellt_am).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/jugend/erziehungsberechtigte/${eb.ID}/bearbeiten`}>
                        <span className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</span>
                        </Link>
                        <Link href={`/jugend/erziehungsberechtigte/${eb.ID}`}>
                        <span className="text-blue-600 hover:text-blue-900">Ansehen</span>
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
    const erziehungsberechtigte = await db2.jf_erziehungsberechtigter.findMany({
        include: {
        jf_mitglied: true,
        person: true
        },
        orderBy: {
        Erstellt_am: 'desc',
        },
    })

    return {
        props: {
        erziehungsberechtigte: JSON.parse(JSON.stringify(erziehungsberechtigte)),
        },
    }
}