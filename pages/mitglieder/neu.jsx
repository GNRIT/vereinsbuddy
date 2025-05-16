import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import MitgliedForm from './components/MitgliedForm'

export default function NeuesMitglied() {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
            const response = await fetch('/api/mitglieder', {
                method: 'POST',
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
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Neues Mitglied anlegen</h1>
                <MitgliedForm 
                    onSubmit={handleSubmit}
                    initialData={{
                        Vorname: '',
                        Name: '',
                        Geburtsdatum: null,
                        Strasse: '',
                        Hausnummer: '',
                        Postleitzahl: '',
                        Ort: '',
                        Email: '',
                        Handynr: '',
                        Rolle: 'mitglied',
                        ff_mitglied: []
                    }}
                />
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    }
}