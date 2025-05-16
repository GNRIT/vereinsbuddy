import { vereinsbuddyPrisma as db1, vereinDbPrisma as db2 } from '@/lib/prisma'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import MitgliedForm from '../components/MitgliedForm'

export default function MitgliedBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
            const response = await fetch(`/api/mitglieder/${initialData.ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    personData: {
                        ...formData.personData,
                        Geburtsdatum: formData.personData.Geburtsdatum?.toISOString() || null
                    },
                    lehrgaenge: formData.lehrgaenge.map(l => ({
                        id: l.id,
                        datum: l.datum?.toISOString() || null
                    }))
                }),
            })

            if (response.ok) {
                router.push('/mitglieder')
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
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Mitglied bearbeiten</h1>
                <MitgliedForm 
                    initialData={initialData}
                    onSubmit={handleSubmit}
                />
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
    if (!parsedId || isNaN(parsedId)) {
        return {
            notFound: true,
        }
    }

    // Mitgliedsdaten mit allen notwendigen Relationen laden
    const [mitglied, ffMitglied] = await Promise.all([
        db1.person.findUnique({
            where: { ID: parsedId },
            include: {
                vereinszuordnung: {
                    include: { verein: true }
                }
            }
        }),
        db2.ff_mitglied.findFirst({
            where: { ID: parsedId },
            include: {
                ff_mitglied_lehrgang: {
                    include: { lehrgang: true }
                }
            }
        })
    ])

    if (!mitglied) {
        return {
            notFound: true,
        }
    }

    // Daten für das Formular aufbereiten
    const initialData = {
        ...mitglied,
        Rolle: mitglied.vereinszuordnung?.[0]?.rolle || 'mitglied',
        ff_mitglied: ffMitglied ? [{
            ...ffMitglied,
            ff_mitglied_lehrgang: ffMitglied.ff_mitglied_lehrgang.map(l => ({
                ...l,
                lehrgang: l.lehrgang
            }))
        }] : []
    }

    return {
        props: {
            initialData: JSON.parse(JSON.stringify(initialData)),
        },
    }
}