import Link from 'next/link'
import { useState } from 'react'
import Layout from '../../../components/Layout'

export default function DienstgradeListe({ initialDienstgrade }) {
    const [dienstgrade, setDienstgrade] = useState(initialDienstgrade)
    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = async (id) => {
        if (confirm('Möchten Sie diesen Dienstgrad wirklich löschen?')) {
        setIsLoading(true)
        try {
            const response = await fetch(`/api/dienstgrade/${id}`, {
            method: 'DELETE'
            })
            
            if (response.ok) {
            setDienstgrade(dienstgrade.filter(d => d.id !== id))
            } else {
            alert('Fehler beim Löschen des Dienstgrads')
            }
        } catch (error) {
            console.error('Fehler:', error)
            alert('Ein Fehler ist aufgetreten')
        } finally {
            setIsLoading(false)
        }
        }
    }

    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dienstgrade</h1>
            <Link href="/dienstgrade/neu">
                <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neuer Dienstgrad
                </a>
            </Link>
            </div>
            
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                {/* Tabellenkopf und -inhalt wie zuvor */}
                <tbody className="bg-white divide-y divide-gray-200">
                {dienstgrade.map((dienstgrad) => (
                    <tr key={dienstgrad.id}>
                    {/* Zellen wie zuvor */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/dienstgrade/${dienstgrad.id}/bearbeiten`}>
                        <a className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</a>
                        </Link>
                        <button
                        onClick={() => handleDelete(dienstgrad.id)}
                        disabled={isLoading}
                        className="text-red-600 hover:text-red-900 disabled:opacity-50"
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dienstgrade`)
    const initialDienstgrade = await res.json()
    
    return {
        props: {
        initialDienstgrade,
        },
    }
}