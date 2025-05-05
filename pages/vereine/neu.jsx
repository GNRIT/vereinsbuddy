import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import VereinForm from './components/VereinForm'

export default function NeuerVerein() {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch('/api/vereine', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push('/vereine')
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Neuen Verein erstellen</h1>
            <VereinForm onSubmit={handleSubmit} />
        </div>
        </div>
    )
    }

    export async function getServerSideProps(context) {
    const session = await getSession(context)

    /*if (!session) {
        return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
        }
    }

    // Nur Admins dürfen Vereine erstellen
    const isAdmin = session.user.vereine.some(v => v.Rolle === 'admin')
    if (!isAdmin) {
        return {
        redirect: {
            destination: '/admin',
            permanent: false,
        },
        }
    }*/

    return {
        props: {},
    }
}