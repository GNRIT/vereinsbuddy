import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LehrgangsZuordnungen({ zuordnungen }) {
    const router = useRouter();
            
                const handleDelete = async (id) => {
                    if (!confirm('Willst du dieses Lehrgengzuornung wirklich löschen?')) return;
            
                    try {
                        const res = await fetch(`/api/lehrgangzuordnung/${id}`, {
                            method: 'DELETE',
                        });
            
                        if (!res.ok) {
                            const error = await res.json();
                            alert(`Fehler: ${error.message}`);
                            return;
                        }
            
                        alert('Lehrgengzuornung gelöscht.');
                        router.replace(router.asPath);
                    } catch (err) {
                        console.error(err);
                        alert('Fehler beim Löschen.');
                    }
                };
    
    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Lehrgangszuordnungen</h1>
            <Link href="/lehrgangzuordnung/neu">
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
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lehrgang</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum bestanden</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {zuordnungen.map((zuordnung) => (
                    <tr key={zuordnung.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {zuordnung.ID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                        {zuordnung.ff_mitglied.ID}
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {zuordnung.lehrgang.Beschreibung}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {zuordnung.Datum_bestanden ? new Date(zuordnung.Datum_bestanden).toLocaleDateString() : 'Nicht bestanden'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/lehrgangzuordnung/${zuordnung.ID}/bearbeiten`}>
                        <span className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</span>
                        </Link>
                        <button
                                onClick={() => handleDelete(zuordnung.ID)}
                                className="text-red-600 hover:text-red-900"
                            >
                                Löschen
                        </button>
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