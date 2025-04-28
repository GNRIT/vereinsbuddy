import { useRouter } from 'next/router'
import { useState } from 'react'
import Layout from '../../components/Layout'
import DienstgradForm from './components/DienstgradForm'

export default function NeuerDienstgrad() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (formData) => {
        setIsSubmitting(true)
        try {
        const response = await fetch('/api/dienstgrade', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push('/dienstgrade')
        } else {
            const errorData = await response.json()
            alert(errorData.message || 'Fehler beim Speichern')
        }
        } catch (error) {
        console.error('Fehler:', error)
        alert('Ein Fehler ist aufgetreten')
        } finally {
        setIsSubmitting(false)
        }
    }

    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Neuen Dienstgrad anlegen</h1>
            <DienstgradForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
        </Layout>
    )
}