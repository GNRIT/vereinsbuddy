import { useRouter } from 'next/router'
import { useState } from 'react'

export default function DienstabendForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Datum: initialData.Datum ? new Date(initialData.Datum).toISOString().slice(0, 16) : '',
        Thema: initialData.Thema || ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
        ...prev,
        [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
        await onSubmit(formData)
        } finally {
        setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
            <div>
            <label htmlFor="Datum" className="block text-sm font-medium text-gray-700">
                Datum und Uhrzeit *
            </label>
            <input
                type="datetime-local"
                id="Datum"
                name="Datum"
                required
                value={formData.Datum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Thema" className="block text-sm font-medium text-gray-700">
                Thema
            </label>
            <input
                type="text"
                id="Thema"
                name="Thema"
                value={formData.Thema}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Thema des Dienstabends (optional)"
            />
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/dienstabend')}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
            Abbrechen
            </button>
            <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
            {isSubmitting ? 'Speichern...' : 'Speichern'}
            </button>
        </div>
        </form>
    )
}