import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function EinsatzListe({ einsaetze: initialEinsaetze }) {
    const [einsaetze, setEinsaetze] = useState(initialEinsaetze);
    const router = useRouter();

    const handleDelete = async (ID) => {
        if (confirm('Möchten Sie diesen Einsatz wirklich löschen?')) {
            try {
                const response = await fetch(`/api/einsatz/${ID}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setEinsaetze(einsaetze.filter((einsatz) => einsatz.ID !== ID));
                } else {
                    const errorData = await response.json();
                    alert(errorData.message || 'Fehler beim Löschen des Einsatzes');
                }
            } catch (error) {
                console.error('Fehler:', error);
                alert('Ein Fehler ist aufgetreten');
            }
        }
    };

    return (
        <div>
            <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Einsatzverwaltung</h1>
                    <Link href="/einsatz/neu">
                        <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer">
                            Neuer Einsatz
                        </span>
                    </Link>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {['ID', 'Einsatznummer', 'Beschreibung', 'Datum Anfang', 'Uhrzeit Anfang', 'Datum Ende', 'Ort', 'Einsatzart', 'Aktionen'].map((title) => (
                                    <th key={title} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {title}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {einsaetze.map((einsatz) => (
                                <tr key={einsatz.ID}>
                                    <td className="px-6 py-4 text-sm text-gray-900">{einsatz.ID}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{einsatz.Einsatznummer}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{einsatz.Beschreibung}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{new Date(einsatz.Datum_Anfang).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        {einsatz.Uhrzeit_Anfang
                                            ? new Date(einsatz.Uhrzeit_Anfang).toLocaleTimeString([], {
                                                  hour: '2-digit',
                                                  minute: '2-digit',
                                              })
                                            : '–'}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        {einsatz.Datum_Ende ? new Date(einsatz.Datum_Ende).toLocaleDateString() : '–'}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{einsatz.Ort || '–'}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{einsatz.Art || '–'}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-3">
                                            <Link href={`/einsatz/${einsatz.ID}/bearbeiten`}>
                                                <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Bearbeiten</span>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(einsatz.ID)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Löschen
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {einsaetze.length === 0 && (
                                <tr>
                                    <td colSpan="9" className="text-center py-6 text-gray-500">
                                        Keine Einsätze gefunden.
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
    const einsaetze = await db2.einsatz.findMany({
        orderBy: {
            Datum_Anfang: 'desc',
        },
    });

    return {
        props: {
            einsaetze: JSON.parse(JSON.stringify(einsaetze)),
        },
    };
}
