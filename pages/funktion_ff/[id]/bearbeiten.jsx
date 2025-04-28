import { vereinDbPrisma as db2 } from '@/lib/prisma'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import FunktionForm from '../components/FunktionForm'

export default function FunktionBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/funktionen/${initialData.ID}`, {
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
            router.push(`/funktionen/${initialData.ID}`)
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
        <div>
            <div className="bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Funktion bearbeiten</h1>
                <FunktionForm initialData={initialData} onSubmit={handleSubmit} />
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

    const funktion = await db2.funktion_ff.findUnique({
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