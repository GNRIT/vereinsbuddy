import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import { useState } from 'react';

export default function EinteilungenListe({einteilungen: initialEinteilungen  }) {
    const [einteilungen, setEinteilungen] = useState(initialEinteilungen);

    const handleDelete = async (id) => {
        if (confirm('Möchtest du diese Einteilung wirklich löschen?')) {
        try {
            const response = await fetch(`/api/einteilung/${id}`, {
            method: 'DELETE',
            });

            if (response.ok) {
            setEinteilungen(einteilungen.filter((e) => e.ID !== id));
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
            <h1 className="text-2xl font-bold text-gray-900">Einteilungen</h1>
            <Link href="/einteilungen/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer">
                Neue Einteilung
                </span>
            </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    {['ID', 'Einsatz_ID', 'Dienstabend_ID', 'FF-Mitglied_ID', 'Fahrzeug_ID', 'Einheit_ID', 'Aktionen'].map((th) => (
                    <th key={th} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {th}
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {einteilungen.map((einteilung) => (
                    <tr key={einteilung.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{einteilung.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{einteilung.einsatz?.Titel || 'Kein Einsatz'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {einteilung.dienstabend?.Datum ? new Date(einteilung.dientsabend.Datum).toLocaleDateString() : 'Kein Dienstabend'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {einteilung.ff_mitglied?.Vorname} {einteilung.ff_mitglied?.Name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{einteilung.fahrzeug?.Kennzeichen || 'Kein Fahrzeug'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{einteilung.einheit?.Name || 'Keine Einheit'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                        <Link href={`/einteilungen/${einteilung.ID}/bearbeiten`}>
                            <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Bearbeiten</span>
                        </Link>
                        <button
                            onClick={() => handleDelete(einteilung.ID)}
                            className="text-red-600 hover:text-red-900"
                        >
                            Löschen
                        </button>
                        </div>
                    </td>
                    </tr>
                ))}
                {einteilungen.length === 0 && (
                    <tr>
                    <td colSpan="7" className="text-center py-6 text-gray-500">
                        Keine Einteilungen vorhanden.
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
    const einteilungen = await db2.einteilung.findMany({
        include: {
        einsatz: true,
        dienstabend: true,
        ff_mitglied: true,
        fahrzeug: true,
        einheit: true,
        },
        orderBy: {
        ID: 'desc',
        },
    });

    return {
        props: {
        einteilungen: JSON.parse(JSON.stringify(einteilungen)),
        },
    };
}
