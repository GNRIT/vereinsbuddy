import { useRouter } from 'next/router'
import { useState } from 'react'

export default function MitgliedLoginForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Benutzer_ID: initialData.Benutzer_ID || '',
        Mitglied_ID: initialData.Mitglied_ID || '',
        Typ: initialData.Typ || 'ff',
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
            <label htmlFor="Benutzer_ID" className="block text-sm font-medium text-gray-700">Benutzer ID *</label>
            <input
                type="number"
                name="Benutzer_ID"
                id="Benutzer_ID"
                required
                value={formData.Benutzer_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Mitglied_ID" className="block text-sm font-medium text-gray-700">Mitglied ID *</label>
            <input
                type="number"
                name="Mitglied_ID"
                id="Mitglied_ID"
                required
                value={formData.Mitglied_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Typ" className="block text-sm font-medium text-gray-700">Typ *</label>
            <select
                id="Typ"
                name="Typ"
                value={formData.Typ}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="ff">Feuerwehr (FF)</option>
                <option value="jf">Jugendfeuerwehr (JF)</option>
            </select>
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/mitglied-login')}
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