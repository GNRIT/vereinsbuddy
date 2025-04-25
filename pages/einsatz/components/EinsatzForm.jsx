import { useRouter } from 'next/router'
import { useState } from 'react'

export default function EinsatzForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Einsatznummer: initialData.Einsatznummer || '',
        Beschreibung: initialData.Beschreibung || '',
        Datum_Anfang: initialData.Datum_Anfang 
        ? new Date(initialData.Datum_Anfang).toISOString().slice(0, 16)
        : new Date().toISOString().slice(0, 16),
        Datum_Ende: initialData.Datum_Ende
        ? new Date(initialData.Datum_Ende).toISOString().slice(0, 16)
        : '',
        Ort: initialData.Ort || ''
    })

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
        await onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
            <div>
            <label htmlFor="Titel" className="block text-sm font-medium text-gray-700">Einsatznummer *</label>
            <input
                name="Einsatznummer"
                id="Einsatznummer"
                required
                value={formData.Einsatznummer}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Beschreibung" className="block text-sm font-medium text-gray-700">Beschreibung</label>
            <textarea
                name="Beschreibung"
                id="Beschreibung"
                rows={4}
                value={formData.Beschreibung}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="StartDatum" className="block text-sm font-medium text-gray-700">Datum_Anfang *</label>
                <input
                type="datetime-local"
                name="Datum_Anfang"
                id="Datum_Anfang"
                required
                value={formData.Datum_Anfang}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="EndDatum" className="block text-sm font-medium text-gray-700">Datum_Ende</label>
                <input
                type="datetime-local"
                name="Datum_Ende"
                id="Datum_Ende"
                value={formData.EndDatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            </div>

            <div>
            <label htmlFor="Ort" className="block text-sm font-medium text-gray-700">Ort *</label>
            <input
                type="text"
                name="Ort"
                id="Ort"
                required
                value={formData.Ort}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/einsatz')}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
            Abbrechen
            </button>
            <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
            Speichern
            </button>
        </div>
        </form>
    )
}