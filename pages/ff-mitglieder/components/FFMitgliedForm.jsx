import { useRouter } from 'next/router'
import { useState } from 'react'

export default function FFMitgliedForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        person_ID: initialData.Person_ID,
        Eintrittsdatum: initialData.Eintrittsdatum
            ? new Date(initialData.Eintrittsdatum).toISOString().split('T')[0] 
            : new Date().toISOString().split('T')[0],
        Austrittsdatum: initialData.Austrittsdatum
            ? new Date(initialData.Austrittsdatum).toISOString().split('T')[0] 
            : '',
        Austrittsdatum: initialData.Aufnahmedatum
            ? new Date(initialData.Aufnahmedatum).toISOString().split('T')[0] 
            : '',
        Aktiv: initialData.Status === 'aktiv' ? true : false,
        Erstellt_am: initialData.Erstellt_am
            ? new Date(initialData.Erstellt_am).toISOString().split('T')[0] 
            : '',
        Geaendert_am: initialData.Geaendert_am
            ? new Date(initialData.Geaendert_am).toISOString().split('T')[0] 
            : '',
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

        const payload = {
            Person_ID: formData.person_ID ? parseInt(formData.person_ID, 10) : null,
            Eintrittsdatum: formData.Eintrittsdatum,
            Austrittsdatum: formData.Austrittsdatum || null,
            Aufnahmedatum: formData.Aufnahmedatum || null,
            Status: formData.Aktiv ? 'aktiv' : 'inaktiv',
            Erstellt_am: formData.Erstellt_am,
            Geaendert_am: formData.Geaendert_am || null,
        }

        await onSubmit(payload)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label htmlFor="person_ID" className="block text-sm font-medium text-gray-700">Person_ID *</label>
            <input
                type="number"
                name="person_ID"
                id="person_ID"
                required
                value={formData.person_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
            <div>
            <label htmlFor="Eintrittsdatum" className="block text-sm font-medium text-gray-700">Eintrittsdatum *</label>
            <input
                type="date"
                name="Eintrittsdatum"
                id="Eintrittsdatum"
                required
                value={formData.Eintrittsdatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
    
            <div>
            <label htmlFor="Austrittsdatum" className="block text-sm font-medium text-gray-700">Austrittsdatum</label>
            <input
                type="date"
                name="Austrittsdatum"
                id="Austrittsdatum"
                value={formData.Austrittsdatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
    
            <div>
            <label htmlFor="Aufnahmedatum" className="block text-sm font-medium text-gray-700">Aufnahmedatum</label>
            <input
                type="date"
                name="Aufnahmedatum"
                id="Aufnahmedatum"
                value={formData.Aufnahmedatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
    
            <div className="flex items-center">
            <input
                type="checkbox"
                name="Aktiv"
                id="Aktiv"
                checked={formData.Aktiv}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="Aktiv" className="ml-2 block text-sm text-gray-900">
                Aktiv
            </label>
            </div>
        </div>
    
        <div>
            <label htmlFor="Erstellt_am" className="block text-sm font-medium text-gray-700">Erstellt am</label>
            <input
                type="date"
                name="Erstellt_am"
                id="Erstellt_am"
                value={formData.Erstellt_am}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </div>
    
        <div>
            <label htmlFor="Geändert_am" className="block text-sm font-medium text-gray-700">Geändert am</label>
            <input
                type="date"
                name="Geändert_am"
                id="Geändert_am"
                value={formData.Geändert_am}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </div>

            {/* Erstell- und Änderungsdatum */}

            <div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={() => router.push('/ff-mitglieder')}
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
