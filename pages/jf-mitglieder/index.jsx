import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function JFMitgliederListe({ mitglieder }) {
    const router = useRouter();
            
    const handleDelete = async (id) => {
        if (!confirm('Willst du dieses JF-Mitglied wirklich löschen?')) return;
            
        try {
            const res = await fetch(`/api/jf-mitglied/${id}`, {
                method: 'DELETE',
            });
            
            if (!res.ok) {
                const error = await res.json();
                alert(`Fehler: ${error.message}`);
                return;
            }
            
            alert('JF-Mitglied gelöscht.');
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
            <h1 className="text-2xl font-bold text-gray-900">JF-Mitgliederverwaltung</h1>
            <Link href="/jf-mitglieder/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neues Mitglied anlegen
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Person ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eintrittsdatum</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Austrittsdatum</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aufnahmedatum</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Erstellt am</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Geändert am</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {mitglieder.map((mitglied) => (
                    <tr key={mitglied.ID}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            {mitglied.ID}
                        </div>
                        <div className="ml-4">
                            <div className="text-sm text-gray-500">{mitglied.Person_ID}</div>
                        </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {mitglied.Eintrittsdatum ? new Date(mitglied.Eintrittsdatum).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {mitglied.Austrittsdatum ? new Date(mitglied.Austrittsdatum).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {mitglied.Aufnahmedatum ? new Date(mitglied.Aufnahmedatum).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {mitglied.Status === 'aktiv' ? (
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
                        {mitglied.Erstellt_am ? new Date(mitglied.Erstellt_am).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {mitglied.Geandert_am ? new Date(mitglied.Geandert_am).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/jf-mitglieder/${mitglied.ID}/bearbeiten`}>
                        <span className="text-blue-600 hover:text-blue-900 mr-3">Bearbeiten</span>
                        </Link>
                        <Link href={`/jf-mitglieder/${mitglied.ID}`}>
                        <span className="text-indigo-600 hover:text-indigo-900">Details</span>
                        </Link>
                        <button
                        onClick={() => handleDelete(mitglied.ID)}
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
    const mitglieder = await db2.jf_mitglied.findMany({
        orderBy: {
        ID: 'asc',
        },
    })

    return {
        props: {
        mitglieder: JSON.parse(JSON.stringify(mitglieder)),
        },
    }
}