import { useRouter } from 'next/router'
import EinheitForm from '../../../components/EinheitForm'
import Layout from '../../../components/Layout'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default function EinheitBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/einheiten/${initialData.ID}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push(`/einheiten/${initialData.ID}`)
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Einheit bearbeiten</h1>
            <EinheitForm initialData={initialData} onSubmit={handleSubmit} />
        </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params

    const einheit = await prisma.einheit.findUnique({
        where: {
        ID: parseInt(id),
        },
    })

    if (!einheit) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        initialData: JSON.parse(JSON.stringify(einheit)),
        },
    }
}