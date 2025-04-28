import { vereinDbPrisma as db2 } from '@/lib/prisma'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ConfirmationDialog from './components/ConfirmationDialog'

export default function FahrzeugDetail({ fahrzeug }) {
    const router = useRouter()
    const [isDeleting, setIsDeleting] = useState(false)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)

    const handleDelete = async () => {
        setIsDeleting(true)
        try {
        const response = await fetch(`/api/fahrzeuge/${fahrzeug.id}`, {
            method: 'DELETE',
        })

        if (response.ok) {
            router.push('/fahrzeuge')
        } else {
            const errorData = await response.json()
            alert(errorData.message || 'Fehler beim Löschen')
        }
        } catch (error) {
        console.error('Fehler:', error)
        alert('Ein Fehler ist aufgetreten')
        } finally {
        setIsDeleting(false)
        setShowDeleteDialog(false)
        }
    }

    return (
        <div>
        <ConfirmationDialog
            isOpen={showDeleteDialog}
            onClose={() => setShowDeleteDialog(false)}
            onConfirm={handleDelete}
            title="Fahrzeug löschen"
            message="Möchten Sie dieses Fahrzeug wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden."
            confirmText={isDeleting ? 'Löschen...' : 'Löschen'}
            confirmDisabled={isDeleting}
        />
        
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Fahrzeug: {fahrzeug.Kennzeichen || 'Ohne Kennzeichen'}</h1>
            <div>
                <button
                onClick={() => router.push(`/fahrzeuge/${fahrzeug.id}/bearbeiten`)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded mr-2"
                >
                Bearbeiten
                </button>
                <button
                onClick={() => setShowDeleteDialog(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded mr-2"
                >
                Löschen
                </button>
                <button
                onClick={() => router.push('/fahrzeuge')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
                >
                Zurück
                </button>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Grunddaten</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Kennzeichen</label>
                    <p className="mt-1 text-sm text-gray-900">{fahrzeug.Kennzeichen || '-'}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Fahrzeugtyp</label>
                    <p className="mt-1 text-sm text-gray-900">{fahrzeug.Fahrzeugtyp || '-'}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Besatzungsstärke</label>
                    <p className="mt-1 text-sm text-gray-900">{fahrzeug.Besatzungsstaerke || '-'}</p>
                </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Status</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Aktueller Status</label>
                    <p className="mt-1 text-sm text-gray-900">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        fahrzeug.Status === 'verfuegbar' ? 'bg-green-100 text-green-800' :
                        fahrzeug.Status === 'im_einsatz' ? 'bg-yellow-100 text-yellow-800' :
                        fahrzeug.Status === 'in_wartung' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                    }`}>
                        {fahrzeug.Status.replace('_', ' ')}
                    </span>
                    </p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Erstellt am</label>
                    <p className="mt-1 text-sm text-gray-900">
                    {new Date(fahrzeug.Erstellt_am).toLocaleDateString()}
                    </p>
                </div>
                {fahrzeug.Geaendert_am && (
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Geändert am</label>
                    <p className="mt-1 text-sm text-gray-900">
                        {new Date(fahrzeug.Geaendert_am).toLocaleDateString()}
                    </p>
                    </div>
                )}
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params
    const session = await getSession(context)

    if (!session) {
        return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
        }
    }

    const fahrzeug = await db2.fahrzeug.findUnique({
        where: {
        ID: parseInt(id),
        },
    })

    if (!fahrzeug) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        fahrzeug: JSON.parse(JSON.stringify(fahrzeug)),
        },
    }
}