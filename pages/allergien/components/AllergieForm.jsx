import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function AllergieForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        FF_Mitglied_ID: initialData.FF_Mitglied_ID || '',
        JF_Mitglied_ID: initialData.JF_Mitglied_ID || '',
        Allergie: initialData.Allergie || '',
        Beschreibung: initialData.Beschreibung || ''
    })
    
    const [mitglieder, setMitglieder] = useState([])
    const router = useRouter()

    useEffect(() => {
        async function loadMitglieder() {
        const response = await fetch('/api/mitglieder')
        const data = await response.json()
        setMitglieder(data)
        }
        loadMitglieder()
    }, [])

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
            <div>
            <label htmlFor="FF_Mitglied_ID" className="block text-sm font-medium text-gray-700">
                Feuerwehr Mitglied *
            </label>
            <select
                name="FF_Mitglied_ID"
                id="FF_Mitglied_ID"
                required
                value={formData.FF_Mitglied_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="">Bitte auswählen</option>
                {mitglieder.filter(m => m.Mitgliedsart === 'FF').map(m => (
                <option key={m.id} value={m.id}>
                    {m.Vorname} {m.Name}
                </option>
                ))}
            </select>
            </div>

            <div>
            <label htmlFor="JF_Mitglied_ID" className="block text-sm font-medium text-gray-700">
                Jugendfeuerwehr Mitglied
            </label>
            <select
                name="JF_Mitglied_ID"
                id="JF_Mitglied_ID"
                value={formData.JF_Mitglied_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="">Kein Jugendfeuerwehr Mitglied</option>
                {mitglieder.filter(m => m.Mitgliedsart === 'JF').map(m => (
                <option key={m.id} value={m.id}>
                    {m.Vorname} {m.Name}
                </option>
                ))}
            </select>
            </div>
        </div>

        <div>
            <label htmlFor="Allergie" className="block text-sm font-medium text-gray-700">
            Allergie *
            </label>
            <input
            type="text"
            name="Allergie"
            id="Allergie"
            required
            value={formData.Allergie}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </div>

        <div>
            <label htmlFor="Beschreibung" className="block text-sm font-medium text-gray-700">
            Beschreibung
            </label>
            <textarea
            name="Beschreibung"
            id="Beschreibung"
            rows={4}
            value={formData.Beschreibung}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/allergien')}
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