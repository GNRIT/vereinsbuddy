import { vereinDbPrisma as db2 } from '@/lib/prisma'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import TeilnahmeForm from '../components/TeilnahmeForm'

export default function TeilnahmeBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/teilnahmen/${initialData.ID}`, {
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
            router.push(`/teilnahmen/${initialData.ID}`)
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Teilnahme bearbeiten</h1>
            <TeilnahmeForm initialData={initialData} onSubmit={handleSubmit} />
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

    const parsedId = parseInt(id);
    if (!parsedId || isNaN(parsedId)) {
        return {
            notFound: true,
        };
    }

    const teilnahme = await db2.teilnahme.findUnique({
        where: {
        ID: parsedId,
        },
        include: {
        mitglied: true,
        veranstaltung: true
        }
    })

    if (!teilnahme) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        initialData: JSON.parse(JSON.stringify(teilnahme)),
        },
    }
}