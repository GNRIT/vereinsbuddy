import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import MitgliedFunktionForm from '../../../components/MitgliedFunktionForm'
import { vereinDbPrisma as prisma } from '../../../lib/prisma'

export default function MitgliedFunktionBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/mitglied-funktionen/${initialData.ID}`, {
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
            router.push(`/mitglied-funktionen/${initialData.ID}`)
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Mitglied-Funktion-Zuordnung bearbeiten</h1>
            <MitgliedFunktionForm initialData={initialData} onSubmit={handleSubmit} />
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

    const zuordnung = await prisma.mitglied_funktionen.findUnique({
        where: {
        ID: parseInt(id),
        },
        include: {
        ff_mitglied: {
            select: {
            Vorname: true,
            Name: true
            }
        },
        funktion_ff: {
            select: {
            Name: true
            }
        }
        }
    })

    if (!zuordnung) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        initialData: JSON.parse(JSON.stringify(zuordnung)),
        },
    }
}