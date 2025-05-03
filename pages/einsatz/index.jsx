import { vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';

export default function EinsatzListe({ einsaetze }) {
    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Einsatzverwaltung</h1>
            <Link href="/einsatz/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neuer Einsatz
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Einsatznummer</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beschreibung</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum Anfang</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uhrzeit Anfang</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum Ende</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ort</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Einsatzart</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {einsaetze.map((einsatz) => (
                    <tr key={einsatz.ID}>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                        {einsatz.ID}
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                        {einsatz.Einsatznummer}
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                        {einsatz.Beschreibung}
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                        {new Date(einsatz.Datum_Anfang).toLocaleDateString()}
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                            {new Date(einsatz.Uhrzeit_Anfang).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                    </td>


                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                        {new Date(einsatz.Datum_Ende).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">
                        {new Date(einsatz.Datum_Ende).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{einsatz.Ort}</td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{einsatz.Art}</td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/einsatz/${einsatz.ID}/bearbeiten`}>
                        <span className="text-indigo-600 hover:text-indigo-900">Bearbeiten</span>
                        </Link>
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
    const einsaetze = await db2.einsatz.findMany({
        orderBy: {
        Datum_Anfang: 'desc',
        },
    })

    return {
        props: {
        einsaetze: JSON.parse(JSON.stringify(einsaetze)),
        },
    }
}