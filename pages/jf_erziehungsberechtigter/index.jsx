import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ErziehungsberechtigteListe({ erziehungsberechtigte }) {
    const router = useRouter();
                
        const handleDelete = async (id) => {
            if (!confirm('Willst du dieses JF-Erziehungsberechtigter wirklich löschen?')) return;
                
            try {
                const res = await fetch(`/api/jf_erziehungsberechtigter/${id}`, {
                    method: 'DELETE',
                });
                
                if (!res.ok) {
                    const error = await res.json();
                    alert(`Fehler: ${error.message}`);
                    return;
                }
                
                alert('JF-Erziehungsberechtigter gelöscht.');
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
            <h1 className="text-2xl font-bold text-gray-900">JF-Erziehungsberechtigte</h1>
            <Link href="/jf_erziehungsberechtigter/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neuer JF-Erziehungsberechtigte
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">JF-mitglied</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">JF-Erziehungsberechtigter</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Erstellt am</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {erziehungsberechtigte.map((eb) => (
                    <tr key={eb.ID}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{eb.ID}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">JF_Mitglied_ID: {eb.JF_Mitglied_ID}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Person_ID: {eb.Person_ID}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {eb.Erstellt_am ? new Date(eb.Erstellt_am).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/jf_erziehungsberechtigter/${eb.ID}/bearbeiten`}>
                        <span className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</span>
                        </Link>
                        <button
                        onClick={() => handleDelete(eb.ID)}
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
    const erziehungsberechtigte = await db2.jf_erziehungsberechtigter.findMany({
        include: {
        jf_mitglied: true
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