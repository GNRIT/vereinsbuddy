import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
import Link from 'next/link';

export default function FahrzeugListe({ initialFahrzeugen }) {
    const [fahrzeugen, setFahrzeugen] = useState(initialFahrzeugen);
    
        const handleDelete = async (id) => {
            if (confirm('Möchtest du diesen Fahrzeug wirklich löschen?')) {
            try {
                const response = await fetch(`/api/fahrzeuge/${id}`, {
                method: 'DELETE',
                });
    
                if (response.ok) {
                setFahrzeugen(fahrzeugen.filter((e) => e.ID !== id));
                } else {
                const error = await response.json();
                alert(error.message || 'Fehler beim Löschen');
                }
            } catch (err) {
                console.error(err);
                alert('Ein unerwarteter Fehler ist aufgetreten');
            }
            }
        };

    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Fahrzeugverwaltung</h1>
            <Link href="/fahrzeuge/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neues Fahrzeug
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kennzeichen</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typ</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Besatzung</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {fahrzeugen.map((fahrzeug) => (
                    <tr key={fahrzeug.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fahrzeug.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{fahrzeug.Kennzeichen || '-'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fahrzeug.Fahrzeugtyp || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fahrzeug.Besatzungsstaerke || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        fahrzeug.Status === 'verfuegbar' ? 'bg-green-100 text-green-800' :
                        fahrzeug.Status === 'im_einsatz' ? 'bg-yellow-100 text-yellow-800' :
                        fahrzeug.Status === 'in_wartung' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                        }`}>
                        {fahrzeug.Status.replace('_', ' ')}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link href={`/fahrzeuge/${fahrzeug.ID}/bearbeiten`}>
                        <span className="text-gray-600 hover:text-gray-900">Bearbeiten</span>
                    </Link>
                    <button
                            onClick={() => handleDelete(fahrzeug.ID)}
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

    export async function getServerSideProps(context) {
    const session = await getSession(context)

    /*if (!session) {
        return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
        }
    }*/

    const fahrzeuge = await db2.fahrzeug.findMany({
        orderBy: {
        Kennzeichen: 'asc',
        },
    })

    return {
        props: {
        fahrzeuge: JSON.parse(JSON.stringify(fahrzeuge)),
        },
    }
}