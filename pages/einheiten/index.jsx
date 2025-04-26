import Link from 'next/link'
import Layout from '../../components/Layout'
import { vereinDbPrisma as prisma } from '../../lib/prisma'

export default function EinheitenListe({ einheiten }) {
    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Einheitenverwaltung</h1>
            <Link href="/einheiten/neu">
                <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neue Einheit
                </a>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Abkürzung</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beschreibung</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {einheiten.map((einheit) => (
                    <tr key={einheit.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{einheit.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{einheit.Abkuerzung}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{einheit.Beschreibung}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/einheiten/${einheit.ID}`}>
                        <a className="text-blue-600 hover:text-blue-900 mr-3">Ansehen</a>
                        </Link>
                        <Link href={`/einheiten/${einheit.ID}/bearbeiten`}>
                        <a className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</a>
                        </Link>
                        <button 
                        onClick={() => {
                            if (confirm('Einheit wirklich löschen?')) {
                            fetch(`/api/einheiten/${einheit.ID}`, {
                                method: 'DELETE'
                            }).then(() => window.location.reload())
                            }
                        }}
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
        </Layout>
    )
}

export async function getServerSideProps() {
    const einheiten = await prisma.einheit.findMany({
        orderBy: {
        ID: 'asc',
        },
    })

    return {
        props: {
        einheiten: JSON.parse(JSON.stringify(einheiten)),
        },
    }
}