import { vereinsbuddyPrisma as db1, vereinDbPrisma as db2 } from '@/lib/prisma'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function MitgliederListe({ initialMitglieder, initialFFMitglieder, totalCount }) {
    const router = useRouter()
    const [mitglieder, setMitglieder] = useState(initialMitglieder)
    const [ffMitglieder, setFFMitglieder] = useState(initialFFMitglieder)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const itemsPerPage = 10

    const handleDelete = async (id) => {
        if (!confirm('Möchten Sie dieses Mitglied wirklich löschen?')) return

        try {
            const res = await fetch(`/api/mitglieder/${id}`, {
                method: 'DELETE',
            })

            if (!res.ok) {
                const error = await res.json()
                alert(`Fehler: ${error.message}`)
                return
            }

            // Update der Anzeige
            setMitglieder(prev => prev.filter(m => m.ID !== id))
            setFFMitglieder(prev => prev.filter(m => m.ID !== id))
            alert('Mitglied erfolgreich gelöscht.')
        } catch (err) {
            console.error('Löschen fehlgeschlagen:', err)
            alert('Fehler beim Löschen des Mitglieds.')
        }
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`/api/mitglieder?search=${searchTerm}`)
            if (!res.ok) throw new Error('Suche fehlgeschlagen')
            const data = await res.json()
            setMitglieder(data.data)
            setCurrentPage(1)
        } catch (error) {
            console.error('Suche fehlgeschlagen:', error)
            alert('Suche konnte nicht durchgeführt werden')
        }
    }

    const handlePageChange = async (page) => {
        try {
            const res = await fetch(`/api/mitglieder?page=${page}&limit=${itemsPerPage}`)
            if (!res.ok) throw new Error('Seitenwechsel fehlgeschlagen')
            const data = await res.json()
            setMitglieder(data.data)
            setCurrentPage(page)
        } catch (error) {
            console.error('Seitenwechsel fehlgeschlagen:', error)
            alert('Seite konnte nicht geladen werden')
        }
    }

    // Kombiniere Daten aus beiden Datenbanken
    const combinedMembers = mitglieder.map(mitglied => {
        const ffData = ffMitglieder.find(ff => ff.ID === mitglied.ID) || {}
        return {
            ...mitglied,
            ...ffData
        }
    })

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h1 className="text-2xl font-bold text-gray-900">Mitgliederverwaltung</h1>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <form onSubmit={handleSearch} className="flex">
                            <input
                                type="text"
                                placeholder="Mitglied suchen..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
                            >
                                Suchen
                            </button>
                        </form>
                        
                        <Link href="/mitglieder/neu">
                            <a className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded whitespace-nowrap">
                                Neues Mitglied
                            </a>
                        </Link>
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Kontakt
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Lehrgänge
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Rolle
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Aktionen
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {combinedMembers.map((mitglied) => (
                                <tr key={mitglied.ID} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{mitglied.ID}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {mitglied.Vorname} {mitglied.Name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {mitglied.Geburtsdatum ? new Date(mitglied.Geburtsdatum).toLocaleDateString('de-DE') : '-'}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{mitglied.Email || '-'}</div>
                                        <div className="text-sm text-gray-500">{mitglied.HandyNr || '-'}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="space-y-1">
                                            {mitglied.ff_mitglied_lehrgang?.length > 0 ? (
                                                mitglied.ff_mitglied_lehrgang.map((lehrgang, index) => (
                                                    <div key={index} className="text-sm text-gray-900">
                                                        {lehrgang.lehrgang?.Abk_rzung || 'N/A'} - {lehrgang.lehrgang?.Beschreibung || 'Keine Beschreibung'}
                                                    </div>
                                                ))
                                            ) : (
                                                <span className="text-sm text-gray-500">Keine Lehrgänge</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {mitglied.Vereinszuordnung?.[0]?.Rolle === 'admin' ? (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                Admin
                                            </span>
                                        ) : (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                Mitglied
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                        <Link href={`/mitglieder/${mitglied.ID}`}>
                                            <a className="text-blue-600 hover:text-blue-900">Ansehen</a>
                                        </Link>
                                        <Link href={`/mitglieder/${mitglied.ID}/bearbeiten`}>
                                            <a className="text-indigo-600 hover:text-indigo-900">Bearbeiten</a>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(mitglied.ID)}
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

                {/* Paginierung */}
                <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-700">
                        Seite <span className="font-medium">{currentPage}</span> von{' '}
                        <span className="font-medium">{Math.ceil(totalCount / itemsPerPage)}</span>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            Vorherige
                        </button>
                        {Array.from({ length: Math.min(5, Math.ceil(totalCount / itemsPerPage)) }, (_, i) => {
                            const pageNum = i + 1
                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => handlePageChange(pageNum)}
                                    className={`px-3 py-1 rounded-md ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                >
                                    {pageNum}
                                </button>
                            )
                        })}
                        <button
                            onClick={() => handlePageChange(Math.min(Math.ceil(totalCount / itemsPerPage), currentPage + 1))}
                            disabled={currentPage === Math.ceil(totalCount / itemsPerPage)}
                            className={`px-3 py-1 rounded-md ${currentPage === Math.ceil(totalCount / itemsPerPage) ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            Nächste
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    try {
        const [mitglieder, ffMitglieder, totalCount] = await Promise.all([
            db1.person.findMany({
                take: 10,
                skip: 0,
                include: {
                    vereinszuordnung: true,
                },
                orderBy: {
                    Name: 'asc'
                }
            }),
            db2.ff_mitglied.findMany({
                include: {
                    ff_mitglied_lehrgang: {
                        include: {
                            lehrgang: true
                        }
                    }
                }
            }),
            db1.person.count()
        ])

        return {
            props: {
                initialMitglieder: JSON.parse(JSON.stringify(mitglieder)),
                initialFFMitglieder: JSON.parse(JSON.stringify(ffMitglieder)),
                totalCount
            }
        }
    } catch (error) {
        console.error('Datenabfrage fehlgeschlagen:', error)
        return {
            props: {
                initialMitglieder: [],
                initialFFMitglieder: [],
                totalCount: 0
            }
        }
    }
}