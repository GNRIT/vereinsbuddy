import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import FahrzeugForm from '../../../components/FahrzeugForm'
import Layout from '../../../components/Layout'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default function FahrzeugBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/fahrzeuge/${initialData.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push(`/fahrzeuge/${initialData.id}`)
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Fahrzeug bearbeiten</h1>
            <FahrzeugForm initialData={initialData} onSubmit={handleSubmit} />
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

    const fahrzeug = await prisma.fahrzeug.findUnique({
        where: {
        id: parseInt(id),
        },
    })

    if (!fahrzeug) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        initialData: JSON.parse(JSON.stringify(fahrzeug)),
        },
    }
}