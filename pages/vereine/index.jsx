import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function VereinsListe({ vereine: initialVereine }) {
    const [vereine, setVereine] = useState(initialVereine);

    const handleDelete = async (id) => {
        if (confirm('Möchtest du diesen Verein wirklich löschen?')) {
        try {
            const res = await fetch(`/api/vereine/${id}`, {
            method: 'DELETE',
            });

            if (res.ok) {
            setVereine(vereine.filter((v) => v.id !== id));
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
            <h1 className="text-2xl font-bold text-gray-900">Vereinsverwaltung</h1>
            <Link href="/vereine/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded cursor-pointer">
                Neuen Verein erstellen
                </span>
            </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subdomain</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {vereine.map((verein) => (
                    <tr key={verein.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{verein.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                        {verein.strasse} {verein.hausnummer}
                        </div>
                        <div className="text-sm text-gray-500">
                        {verein.postleitzahl} {verein.ort}
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{verein.subdomain}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                        <Link href={`/vereine/${verein.id}/bearbeiten`}>
                            <span className="text-blue-600 hover:text-blue-900 cursor-pointer">Bearbeiten</span>
                        </Link>
                        <button
                            onClick={() => handleDelete(verein.id)}
                            className="text-red-600 hover:text-red-900"
                        >
                            Löschen
                        </button>
                        </div>
                    </td>
                    </tr>
                ))}
                {vereine.length === 0 && (
                    <tr>
                    <td colSpan="4" className="text-center py-6 text-gray-500">
                        Keine Vereine vorhanden.
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

    // Nur Admins dürfen alle Vereine sehen
    /*const isAdmin = session.user.vereine.some(v => v.rolle === 'admin')
    if (!isAdmin) {
        return {
        redirect: {
            destination: '/dashboard',
            permanent: false,
        },
        }
    }*/

    const vereine = await db1.verein.findMany()

    return {
        props: {
        vereine: JSON.parse(JSON.stringify(vereine)),
        },
    }
}