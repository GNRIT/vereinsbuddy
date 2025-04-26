import Layout from '@/components/Layout'
import { vereinDbPrisma as db2 } from '@/lib/prisma'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import JFMitgliedForm from '../components/JFMitgliedForm'

export default function JFMitgliedBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
            const { Person_ID, Eintrittsdatum, Austrittsdatum, Aufnahmedatum, Status, Erstellt_am, Geaendert_am } = formData

            const response = await fetch(`/api/jf-mitglieder/${initialData.ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Person_ID,
                    Eintrittsdatum,
                    Austrittsdatum,
                    Aufnahmedatum,
                    Status,
                    Erstellt_am,
                    Geaendert_am,
                }),
            })

            if (response.ok) {
                router.push(`/jf-mitglieder/${initialData.ID}`)
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
                <h1 className="text-2xl font-bold text-gray-900 mb-6">JF-Mitglied bearbeiten</h1>
                <JFMitgliedForm initialData={initialData} onSubmit={handleSubmit} />
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params
    const session = await getSession(context)

    /*if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }*/

    const mitglied = await db2.jf_mitglied.findUnique({
        where: {
            ID: parseInt(id),
        },
    })

    if (!mitglied) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            initialData: JSON.parse(JSON.stringify(mitglied)),
        },
    }
}
