import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import JugendfunktionForm from '../../../components/JugendfunktionForm'
import Layout from '../../../components/Layout'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default function JugendfunktionBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/jugendfunktionen/${initialData.ID}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            ...formData,
            Geaendert_am: new Date().toISOString(),
            }),
        })

        if (response.ok) {
            router.push(`/jugendfunktionen/${initialData.ID}`)
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Jugendfunktion bearbeiten</h1>
            <JugendfunktionForm initialData={initialData} onSubmit={handleSubmit} />
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

    const funktion = await prisma.funktion_jf.findUnique({
        where: {
        ID: parseInt(id),
        },
    })

    if (!funktion) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        initialData: JSON.parse(JSON.stringify(funktion)),
        },
    }
}