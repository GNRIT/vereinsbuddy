import { useRouter } from 'next/router'
import DienstabendForm from '../../components/DienstabendForm'
import Layout from '../../components/Layout'

export default function NeuerDienstabend() {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch('/api/dienstabend', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push('/dienstabend')
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Neuer Dienstabend</h1>
            <DienstabendForm onSubmit={handleSubmit} />
        </div>
        </Layout>
    )
}