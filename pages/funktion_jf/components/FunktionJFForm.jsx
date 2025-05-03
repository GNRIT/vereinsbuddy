import { useRouter } from 'next/router'
import { useState } from 'react'

export default function FunktionJFForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Name: initialData.Name || '',
        Ist_Admin: initialData.Ist_Admin || false,
        Erstellt_am: initialData.Erstellt_am
            ? new Date(initialData.Erstellt_am).toISOString().split('T')[0] 
            : new Date().toISOString().split('T')[0],
    })

    const router = useRouter()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
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
            <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name *</label>
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

            <div className="flex items-start">
            <div className="flex items-center h-5">
                <input
                id="Ist_Admin"
                name="Ist_Admin"
                type="checkbox"
                checked={formData.Ist_Admin}
                onChange={handleChange}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="Ist_Admin" className="font-medium text-gray-700">Admin-Funktion</label>
                <p className="text-gray-500">Mitglieder mit dieser Funktion erhalten Admin-Rechte</p>
            </div>
            </div>
        </div>

        <div>
            <label htmlFor="Erstellt_am" className="block text-sm font-medium text-gray-700">Eerstellt_am *</label>
            <input
                type="date"
                name="Erstellt_am"
                id="Erstellt_am"
                required
                value={formData.Erstellt_am}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/funktion_jf')}
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