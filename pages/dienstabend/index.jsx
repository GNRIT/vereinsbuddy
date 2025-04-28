import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function DienstabendListe() {
    const router = useRouter()
    const [dienstabende, setDienstabende] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchDienstabende = async () => {
        try {
            const response = await fetch('/api/dienstabend')
            if (response.ok) {
            const data = await response.json()
            setDienstabende(data)
            } else {
            console.error('Fehler beim Laden der Dienstabende')
            }
        } catch (error) {
            console.error('Fehler:', error)
        } finally {
            setIsLoading(false)
        }
        }

        fetchDienstabende()
    }, [])

    const handleDelete = async (id) => {
        if (confirm('Möchten Sie diesen Dienstabend wirklich löschen?')) {
        try {
            const response = await fetch(`/api/dienstabend/${id}`, {
            method: 'DELETE'
            })

            if (response.ok) {
            setDienstabende(dienstabende.filter(da => da.id !== id))
            } else {
            alert('Fehler beim Löschen des Dienstabends')
            }
        } catch (error) {
            console.error('Fehler:', error)
        }
        }
    }

    if (isLoading) {
        return (
        <div>
            <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
        </div>
        )
    }

    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dienstabende</h1>
            <Link href="/dienstabend/neu">
                <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neuer Dienstabend
                </a>
            </Link>
            </div>

            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thema</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {dienstabende.length > 0 ? (
                    dienstabende.map((dienstabend) => (
                    <tr key={dienstabend.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(dienstabend.Datum).toLocaleDateString('de-DE', {
                            weekday: 'short',
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        {dienstabend.Thema || 'Kein Thema angegeben'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                            onClick={() => router.push(`/dienstabend/${dienstabend.id}/bearbeiten`)}
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                            Bearbeiten
                        </button>
                        <button
                            onClick={() => handleDelete(dienstabend.id)}
                            className="text-red-600 hover:text-red-900"
                        >
                            Löschen
                        </button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                        Keine Dienstabende gefunden
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}