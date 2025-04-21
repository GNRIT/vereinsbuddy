import { useRouter } from 'next/router'
import { useState } from 'react'

export default function VereinForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Name: initialData.Name || '',
        Strasse: initialData.Strasse || '',
        Hausnummer: initialData.Hausnummer || '',
        Postleitzahl: initialData.Postleitzahl || '',
        Ort: initialData.Ort || '',
        Subdomain: initialData.Subdomain || ''
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
            <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Vereinsname *</label>
            <input
                type="text"
                name="Name"
                id="Name"
                required
                value={formData.Name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="Strasse" className="block text-sm font-medium text-gray-700">Straße *</label>
                <input
                type="text"
                name="Strasse"
                id="Strasse"
                required
                value={formData.Strasse}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="Hausnummer" className="block text-sm font-medium text-gray-700">Hausnummer *</label>
                <input
                type="text"
                name="Hausnummer"
                id="Hausnummer"
                required
                value={formData.Hausnummer}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="Postleitzahl" className="block text-sm font-medium text-gray-700">Postleitzahl *</label>
                <input
                type="text"
                name="Postleitzahl"
                id="Postleitzahl"
                required
                value={formData.Postleitzahl}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
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

            <div>
            <label htmlFor="Subdomain" className="block text-sm font-medium text-gray-700">Subdomain *</label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                https://
                </span>
                <input
                type="text"
                name="Subdomain"
                id="Subdomain"
                required
                value={formData.Subdomain}
                onChange={handleChange}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="meinverein"
                />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                .vereinsbuddy.de
                </span>
            </div>
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/vereine')}
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