import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import { deleteDienstgrad, getDienstgradById } from '../../../../modules/dienstgrade/services/dienstgradService'

export default function DienstgradLoeschen({ dienstgrad }) {
    const router = useRouter()

    const handleDelete = async () => {
        try {
        await deleteDienstgrad(dienstgrad.id)
        router.push('/dienstgrade')
        } catch (error) {
        console.error('Fehler beim Löschen:', error)
        alert('Fehler beim Löschen des Dienstgrads')
        }
    }

    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dienstgrad löschen</h1>
            <p className="mb-6">Möchten Sie den Dienstgrad wirklich löschen?</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="font-medium text-gray-900">{dienstgrad.Abkuerzung_maennlich} / {dienstgrad.Abkuerzung_weiblich}</h2>
            <p className="text-sm text-gray-500">{dienstgrad.Beschreibung_maennlich || 'Keine Beschreibung'}</p>
            </div>

            <div className="flex justify-end space-x-3">
            <button
                onClick={() => router.push('/dienstgrade')}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Abbrechen
            </button>
            <button
                onClick={handleDelete}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
                Löschen
            </button>
            </div>
        </div>
        </Layout>
    )
    }

    export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
        return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
        }
    }

    const { id } = context.params
    const dienstgrad = await getDienstgradById(id)

    if (!dienstgrad) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        dienstgrad: JSON.parse(JSON.stringify(dienstgrad)),
        },
    }
}