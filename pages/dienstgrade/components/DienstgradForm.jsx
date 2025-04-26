import { useRouter } from 'next/router'
import { useState } from 'react'

export default function DienstgradForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Abkuerzung_maennlich: initialData.Abkuerzung_maennlich || '',
        Beschreibung_maennlich: initialData.Beschreibung_maennlich || '',
        Abkuerzung_weiblich: initialData.Abkuerzung_weiblich || '',
        Beschreibung_weiblich: initialData.Beschreibung_weiblich || '',
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Männliche Form</h3>
            <div className="mb-4">
                <label htmlFor="Abkuerzung_maennlich" className="block text-sm font-medium text-gray-700">Abkürzung</label>
                <input
                type="text"
                name="Abkuerzung_maennlich"
                id="Abkuerzung_maennlich"
                value={formData.Abkuerzung_maennlich}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="Beschreibung_maennlich" className="block text-sm font-medium text-gray-700">Beschreibung</label>
                <textarea
                name="Beschreibung_maennlich"
                id="Beschreibung_maennlich"
                rows={3}
                value={formData.Beschreibung_maennlich}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Weibliche Form</h3>
            <div className="mb-4">
                <label htmlFor="Abkuerzung_weiblich" className="block text-sm font-medium text-gray-700">Abkürzung</label>
                <input
                type="text"
                name="Abkuerzung_weiblich"
                id="Abkuerzung_weiblich"
                value={formData.Abkuerzung_weiblich}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="Beschreibung_weiblich" className="block text-sm font-medium text-gray-700">Beschreibung</label>
                <textarea
                name="Beschreibung_weiblich"
                id="Beschreibung_weiblich"
                rows={3}
                value={formData.Beschreibung_weiblich}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/dienstgrade')}
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