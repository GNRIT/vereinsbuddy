import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DienstgradeListe({ initialDienstgrade }) {
    const [dienstgrade, setDienstgrade] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        setDienstgrade(initialDienstgrade);
    }, [initialDienstgrade]);

    const handleDelete = async (id) => {
        if (confirm('Möchten Sie diesen Dienstgrad wirklich löschen?')) {
            setIsLoading(true);
            setDeletingId(id);

            try {
                const response = await fetch(`/api/dienstgrade/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setDienstgrade((prev) => prev.filter((d) => d.ID !== id));
                } else {
                    alert('Fehler beim Löschen des Dienstgrads');
                }
            } catch (error) {
                console.error('Fehler:', error);
                alert('Ein Fehler ist aufgetreten');
            } finally {
                setIsLoading(false);
                setDeletingId(null);
            }
        }
    };

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Dienstgrade</h1>
                    <Link href="/dienstgrade/neu">
                        <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer">
                            Neuer Dienstgrad
                        </span>
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Abkürzung (m)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bezeichnung (m)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Abkürzung (w)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bezeichnung (w)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {dienstgrade.length > 0 ? (
                                dienstgrade.map((dienstgrad) => (
                                    <tr key={dienstgrad.ID}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dienstgrad.ID}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dienstgrad.Abkuerzung_maennlich}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dienstgrad.Bezeichnung_maennlich}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dienstgrad.Abkuerzung_weiblich}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dienstgrad.Bezeichnung_weiblich}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-4">
                                            <Link href={`/dienstgrade/${dienstgrad.ID}/bearbeiten`}>
                                                <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Bearbeiten</span>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(dienstgrad.ID)}
                                                disabled={isLoading}
                                                className="text-red-600 hover:text-red-900 disabled:opacity-50"
                                            >
                                                {isLoading && deletingId === dienstgrad.ID ? 'Löschen...' : 'Löschen'}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center py-6 text-gray-500">
                                        Keine Dienstgrade vorhanden.
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
    const dienstgrade = await db2.dienstgrad.findMany({
        orderBy: {
            ID: 'desc',
        },
    });

    return {
        props: {
            initialDienstgrade: JSON.parse(JSON.stringify(dienstgrade)),
        },
    };
}
