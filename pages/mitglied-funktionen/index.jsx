import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MitgliedFunktionenListe({ zuordnungen }) {
    const router = useRouter();
        
            const handleDelete = async (id) => {
                if (!confirm('Willst du dieses Mitglied-Funktionen wirklich löschen?')) return;
        
                try {
                    const res = await fetch(`/api/mitglied-funktionen/${id}`, {
                        method: 'DELETE',
                    });
        
                    if (!res.ok) {
                        const error = await res.json();
                        alert(`Fehler: ${error.message}`);
                        return;
                    }
        
                    alert('Mitglied-Funktion gelöscht.');
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
            <h1 className="text-2xl font-bold text-gray-900">Mitglied-Funktionen-Zuordnungen</h1>
            <Link href="/mitglied-funktionen/neu">
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
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitglied_ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Funktion_ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typ</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {zuordnungen.map((zuordnung) => (
                    <tr key={zuordnung.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{zuordnung.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {zuordnung.ff_mitglied?.Vorname} {zuordnung.ff_mitglied?.Name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {zuordnung.funktion_ff?.Name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        zuordnung.Typ === 'ff' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                        {zuordnung.Typ.toUpperCase()}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/mitglied-funktionen/${zuordnung.ID}/bearbeiten`}>
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
    const zuordnungen = await db2.mitglied_funktionen.findMany({
        include: {
        ff_mitglied: {
            select: {
            Person_ID: true
            }
        }
        },
        orderBy: {
        ID: 'desc',
        },
    })

    return {
        props: {
        zuordnungen: JSON.parse(JSON.stringify(zuordnungen)),
        },
    }
}