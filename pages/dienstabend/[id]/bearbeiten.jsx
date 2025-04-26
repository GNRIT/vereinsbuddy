import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DienstabendForm from '../../../components/DienstabendForm'
import Layout from '../../../components/Layout'

export default function DienstabendBearbeiten() {
    const router = useRouter()
    const { id } = router.query
    const [initialData, setInitialData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (id) {
        const fetchDienstabend = async () => {
            try {
            const response = await fetch(`/api/dienstabend/${id}`)
            if (response.ok) {
                const data = await response.json()
                setInitialData(data)
            } else {
                router.push('/dienstabend')
            }
            } catch (error) {
            console.error('Fehler:', error)
            router.push('/dienstabend')
            } finally {
            setIsLoading(false)
            }
        }

        fetchDienstabend()
        }
    }, [id, router])

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/dienstabend/${id}`, {
            method: 'PUT',
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

    if (isLoading) {
        return (
        <Layout>
            <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
        </Layout>
        )
    }

    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dienstabend bearbeiten</h1>
            <DienstabendForm initialData={initialData} onSubmit={handleSubmit} />
        </div>
        </Layout>
    )
}