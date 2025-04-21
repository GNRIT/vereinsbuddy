import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import EinsatzForm from '../../../components/EinsatzForm'
import Layout from '../../../components/Layout'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default function EinsatzBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/einsatz/${initialData.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push(`/einsatz/${initialData.id}`)
        } else {
            const errorData = await response.json()
            alert(errorData.message || 'Fehler beim Speichern')
        }
        } catch (error) {
        console.error('Fehler:', error)
        alert('Ein Fehler ist aufgetreten')
        }
    }

    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Einsatz bearbeiten</h1>
            <EinsatzForm initialData={initialData} onSubmit={handleSubmit} />
        </div>
        </Layout>
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

    const einsatz = await prisma.einsatz.findUnique({
        where: {
        id: parseInt(id),
        },
    })

    if (!einsatz) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        initialData: JSON.parse(JSON.stringify(einsatz)),
        },
    }
    }