import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function BenutzerkontoForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Benutzername: initialData.Benutzername || '',
        Passwort: '',
        Aktiv: initialData.Aktiv ?? true,
        Person_ID: initialData.Person_ID || '',
    })
    const [personen, setPersonen] = useState([])

    const router = useRouter()

    useEffect(() => {
        async function loadPersonen() {
        const response = await fetch('/api/personen')
        const data = await response.json()
        setPersonen(data)
        }
        loadPersonen()
    }, [])

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
            <label htmlFor="Benutzername" className="block text-sm font-medium text-gray-700">Benutzername *</label>
            <input
                type="text"
                name="Benutzername"
                id="Benutzername"
                required
                value={formData.Benutzername}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Passwort" className="block text-sm font-medium text-gray-700">
                {initialData.ID ? 'Neues Passwort' : 'Passwort *'}
            </label>
            <input
                type="password"
                name="Passwort"
                id="Passwort"
                required={!initialData.ID}
                value={formData.Passwort}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {initialData.ID && (
                <p className="mt-1 text-sm text-gray-500">Nur ausfüllen, wenn das Passwort geändert werden soll</p>
            )}
            </div>

            <div>
            <label htmlFor="Person_ID" className="block text-sm font-medium text-gray-700">Person *</label>
            <select
                name="Person_ID"
                id="Person_ID"
                required
                value={formData.Person_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="">Person auswählen</option>
                {personen.map((person) => (
                <option key={person.ID} value={person.ID}>
                    {person.Vorname} {person.Name} ({person.Email})
                </option>
                ))}
            </select>
            </div>

            <div className="flex items-start">
            <div className="flex items-center h-5">
                <input
                id="Aktiv"
                name="Aktiv"
                type="checkbox"
                checked={formData.Aktiv}
                onChange={handleChange}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="Aktiv" className="font-medium text-gray-700">Konto aktiv</label>
                <p className="text-gray-500">Deaktivierte Konten können sich nicht anmelden</p>
            </div>
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/benutzerkonten')}
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