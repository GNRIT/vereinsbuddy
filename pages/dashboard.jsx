import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';

export default function Dashboard() {
    const { data: session } = useSession()


    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Willkommen, {session?.user.vorname}!</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-800">Mitglieder</h2>
                <p className="text-3xl font-bold text-blue-600 mt-2">42</p>
                <p className="text-sm text-blue-500 mt-1">Aktive Mitglieder</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-green-800">Einsätze</h2>
                <p className="text-3xl font-bold text-green-600 mt-2">5</p>
                <p className="text-sm text-green-500 mt-1">Dieser Monat</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-yellow-800">Fahrzeuge</h2>
                <p className="text-3xl font-bold text-yellow-600 mt-2">8</p>
                <p className="text-sm text-yellow-500 mt-1">Verfügbar</p>
            </div>
            </div>
            
            <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Aktuelle Einsätze</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Einsatz</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ort</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15.04.2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Brand in Musterstraße</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Musterstadt</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Abgeschlossen</span>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18.04.2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Technische Hilfeleistung</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Beispielstadt</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">In Bearbeitung</span>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </Layout>
    )
}