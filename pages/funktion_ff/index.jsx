import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';

export default function FunktionenListe({ funktionen }) {
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Funktionen</h1>
            <Link href="/funktion_ff/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neue Funktion
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/funktion_ff/${funktion.ID}/bearbeiten`}>
                        <span className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</span>
                        </Link>
                        <Link href={`/funktion_ff/${funktion.ID}`}>
                        <span className="text-blue-600 hover:text-blue-900">Ansehen</span>
                        </Link>
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
    const funktionen = await db2.funktion_ff.findMany({
        orderBy: {
        ID: 'desc',
        },
    })

    return {
        props: {
        funktionen: JSON.parse(JSON.stringify(funktionen)),
        },
    }
}