import { useRouter } from 'next/router'
import { useState } from 'react'

export default function LehrgangForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Abk_rzung: initialData.Abk_rzung || '',
        Beschreibung: initialData.Beschreibung || '',
        Reihenfolge: initialData.Reihenfolge || '',
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
        await onSubmit({
        ...formData,
        Reihenfolge: formData.Reihenfolge ? parseInt(formData.Reihenfolge) : null,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
            <div>
            <label htmlFor="Abk_rzung" className="block text-sm font-medium text-gray-700">Abkürzung *</label>
            <input
                type="text"
                name="Abk_rzung"
                id="Abk_rzung"
                required
                value={formData.Abk_rzung}
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

            <div>
            <label htmlFor="Reihenfolge" className="block text-sm font-medium text-gray-700">Reihenfolge</label>
            <input
                type="number"
                name="Reihenfolge"
                id="Reihenfolge"
                value={formData.Reihenfolge}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/lehrgang')}
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