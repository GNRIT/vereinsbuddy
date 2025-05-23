import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import Link from 'next/link';
import { useState } from 'react';

export default function VereinszuordnungenListe({ zuordnungen: initialZuordnungen }) {
    const [zuordnungen, setZuordnungen] = useState(initialZuordnungen);

    const handleDelete = async (id) => {
        if (confirm('Möchtest du diese Zuordnung wirklich löschen?')) {
            try {
                const res = await fetch(`/api/vereinszuordnungen/${id}`, {
                    method: 'DELETE',
                });

                if (res.ok) {
                    setZuordnungen(zuordnungen.filter(z => z.ID !== id));
                } else {
                    const error = await res.json();
                    alert(error.message || 'Fehler beim Löschen');
                }
            } catch (err) {
                console.error(err);
                alert('Unerwarteter Fehler beim Löschen');
            }
        }
    };

    return (
        <div>
            <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Vereinszuordnungen</h1>
                    <Link href="/vereinszuordnungen/neu">
                        <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer">
                            Neue Zuordnung
                        </span>
                    </Link>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {['ID', 'Mitglied', 'Verein', 'Rolle', 'Erstellt am', 'Aktionen'].map((title) => (
                                    <th key={title} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {zuordnungen.map((zuordnung) => (
                                <tr key={zuordnung.ID}>
                                    <td className="px-6 py-4 text-sm text-gray-500">{zuordnung.ID}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {zuordnung.person.Vorname} {zuordnung.person.Name}
                                        </div>
                                        <div className="text-sm text-gray-500">{zuordnung.person.Email}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{zuordnung.verein.Name}</td>
                                    <td className="px-6 py-4">
                                        {zuordnung.Rolle === 'admin' ? (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                Admin
                                            </span>
                                        ) : (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Mitglied
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(zuordnung.Erstellt_am).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium space-x-3">
                                        <Link href={`/vereinszuordnungen/${zuordnung.ID}/bearbeiten`}>
                                            <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Bearbeiten</span>
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
                            {zuordnungen.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center py-6 text-gray-500">
                                        Keine Zuordnungen vorhanden.
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
    const zuordnungen = await db1.vereinszuordnung.findMany({
        include: {
            person: true,
            verein: true,
        },
        orderBy: {
            Erstellt_am: 'desc',
        },
    });

    return {
        props: {
            zuordnungen: JSON.parse(JSON.stringify(zuordnungen)),
        },
    };
}
