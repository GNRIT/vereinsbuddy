import { vereinsbuddyPrisma as db1 } from '@/lib/prisma'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import BenutzerkontoForm from '../components/BenutzerkontoForm'

export default function BenutzerkontoBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/benutzerkonten/${initialData.ID}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            ...formData,
            // Nur Passwort senden, wenn es geändert wurde
            Passwort: formData.Passwort || undefined,
            Geaendert_am: new Date().toISOString(),
            }),
        })

        if (response.ok) {
            router.push(`/benutzerkonten`)
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Benutzerkonto bearbeiten</h1>
            <BenutzerkontoForm initialData={initialData} onSubmit={handleSubmit} />
        </div>
        </div>
    )
    }

    export async function getServerSideProps(context) {
    const { id } = context.params
    const session = await getSession(context)

    {/*if (!session) {
        return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
        }
    }*/}

    const parsedId = parseInt(id);
    if (!parsedId || isNaN(parsedId)) {
        return {
            notFound: true,
        };
    }

    const konto = await db1.benutzerkonto.findUnique({
        where: {
        ID: parsedId,
        },
        include: {
        person: true
        }
    })

    if (!konto) {
        return {
        notFound: true,
        }
    }

    // Passwort nicht zurückgeben
    const { Passwort, ...kontoData } = konto

    return {
        props: {
        initialData: JSON.parse(JSON.stringify(kontoData)),
        },
    }
}