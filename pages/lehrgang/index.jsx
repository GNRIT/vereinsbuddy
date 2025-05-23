import { vereinDbPrisma as db2 } from '@/lib/prisma'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LehrgangListe({ lehrgaenge }) {
    const router = useRouter()

    const handleDelete = async (id) => {
        if (confirm('Möchten Sie diesen Lehrgang wirklich löschen?')) {
        const response = await fetch(`/api/lehrgang/${id}`, {
            method: 'DELETE'
        })

        if (response.ok) {
            router.replace(router.asPath)
        } else {
            alert('Fehler beim Löschen des Lehrgangs')
        }
        }
    }

    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Lehrgangsverwaltung</h1>
            <Link href="/lehrgang/neu">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neuer Lehrgang
                </span>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Abkürzung</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beschreibung</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reihenfolge</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {lehrgaenge.map((lehrgang) => (
                    <tr key={lehrgang.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {lehrgang.ID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {lehrgang.Abk_rzung}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {lehrgang.Beschreibung}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {lehrgang.Reihenfolge}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/lehrgang/${lehrgang.ID}/bearbeiten`}>
                        <span className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</span>
                        </Link>
                        <button
                        onClick={() => handleDelete(lehrgang.ID)}
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
        </div>
    )
}

export async function getServerSideProps() {
    const lehrgaenge = await db2.lehrgang.findMany({
        orderBy: {
        Reihenfolge: 'asc',
        },
    })

    return {
        props: {
        lehrgaenge: JSON.parse(JSON.stringify(lehrgaenge)),
        },
    }
}