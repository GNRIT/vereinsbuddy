import { useRouter } from 'next/router';
import AllergieForm from './components/AllergieForm';

export default function NeueAllergie() {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        console.log('Form Data:', formData);
        try {
        const response = await fetch('/api/allergien', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push('/allergien')
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Neue Allergie erfassen</h1>
            <AllergieForm onSubmit={handleSubmit} />
        </div>
        </div>
    )
}