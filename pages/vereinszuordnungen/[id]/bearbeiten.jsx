import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import VereinszuordnungForm from '../components/VereinszuordnungForm'

export default function VereinszuordnungBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
            const response = await fetch(`/api/vereinszuordnungen/${initialData.ID}`, {
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
                router.push(`/vereinszuordnungen`)
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
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Vereinszuordnung bearbeiten</h1>
                <VereinszuordnungForm initialData={initialData} onSubmit={handleSubmit} />
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

    const parsedId = parseInt(id)
    if (isNaN(parsedId)) {
        return {
            notFound: true,
        }
    }

    const { vereinsbuddyPrisma } = await import('@/lib/prisma')

    try {
        const zuordnung = await vereinsbuddyPrisma.vereinszuordnung.findUnique({
            where: {
                ID: parsedId,
            },
            include: {
                person: true,
                verein: true,
            },
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
    } catch (error) {
        console.error('Database error:', error)
        return {
            notFound: true,
        }
    }
}
