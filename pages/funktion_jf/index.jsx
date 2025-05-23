import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function JugendfunktionenListe({ funktionen }) {
        const router = useRouter();
                    
            const handleDelete = async (id) => {
                if (!confirm('Willst du dieses JF-Funktion wirklich löschen?')) return;
                    
                try {
                    const res = await fetch(`/api/funktion_jf/${id}`, {
                        method: 'DELETE',
                    });
                    
                    if (!res.ok) {
                        const error = await res.json();
                        alert(`Fehler: ${error.message}`);
                        return;
                    }
                    
                    alert('JF-Funktion gelöscht.');
                    router.replace(router.asPath);
                } catch (err) {
                    console.error(err);
                    alert('Fehler beim Löschen.');
                }
            };
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Jugendfunktionen</h1>
            <Link href="/funktion_jf/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neue funktion
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin-Funktion</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Erstellt am</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {funktionen.map((funktion) => (
                    <tr key={funktion.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{funktion.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{funktion.Name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {funktion.Ist_Admin ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Ja
                        </span>
                        ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            Nein
                        </span>
                        )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(funktion.Erstellt_am).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/funktion_jf/${funktion.ID}/bearbeiten`}>
                        <span className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</span>
                        </Link>
                        <button
                        onClick={() => handleDelete(funktion.ID)}
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
    )
}

export async function getServerSideProps() {
    const funktionen = await db2.funktion_jf.findMany({
        orderBy: {
        ID: 'asc',
        },
    })

    return {
        props: {
        funktionen: JSON.parse(JSON.stringify(funktionen)),
        },
    }
}