import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import { useState } from 'react';

export default function TeilnahmenListe() {
    const [teilnahmen, setTeilnahmen] = useState([]);

    const handleDelete = async (id) => {
        if (confirm('Möchtest du diese Teilnahme wirklich löschen?')) {
        try {
            const res = await fetch(`/api/teilnahmen/${id}`, {
            method: 'DELETE',
            });

            if (res.ok) {
            setTeilnahmen(teilnahmen.filter((t) => t.ID !== id));
            } else {
            const error = await res.json();
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
            <h1 className="text-2xl font-bold text-gray-900">Teilnahmen</h1>
            <Link href="/teilnahmen/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer">
                Neue Teilnahme
                </span>
            </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitglied ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Veranstaltung ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typ</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Erstellt am</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {teilnahmen.map((teilnahme) => (
                    <tr key={teilnahme.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teilnahme.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {teilnahme.mitglied?.ID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teilnahme.veranstaltung?.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        teilnahme.Typ === 'einsatz'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                        {teilnahme.Typ}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(teilnahme.Erstellt_am).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                        <Link href={`/teilnahmen/${teilnahme.ID}/bearbeiten`}>
                            <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Bearbeiten</span>
                        </Link>
                        <button
                            onClick={() => handleDelete(teilnahme.ID)}
                            className="text-red-600 hover:text-red-900"
                        >
                            Löschen
                        </button>
                        </div>
                    </td>
                    </tr>
                ))}
                {teilnahmen.length === 0 && (
                    <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                        Keine Teilnahmen vorhanden.
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export async function getServerSideProps() {
    const teilnahmen = await db2.teilnahme.findMany({
        orderBy: {
            Erstellt_am: 'desc',
        }
    });

    return {
        props: {
            teilnahmen: JSON.parse(JSON.stringify(teilnahmen)),
        },
    };
}

