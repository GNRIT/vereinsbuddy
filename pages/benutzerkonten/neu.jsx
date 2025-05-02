import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import BenutzerkontoForm from './components/BenutzerkontoForm'

export default function NeuesBenutzerkonto() {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch('/api/benutzerkonten', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            ...formData,
            Erstellt_am: new Date().toISOString(),
            }),
        })

        if (response.ok) {
            router.push('/benutzerkonten')
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Neues Benutzerkonto erstellen</h1>
            <BenutzerkontoForm onSubmit={handleSubmit} />
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