import { useRouter } from 'next/router'
import { useState } from 'react'

export default function MitgliedForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Vorname: initialData.Vorname || '',
        Name: initialData.Name || '',
        Geburtsdatum: initialData.Geburtsdatum ? new Date(initialData.Geburtsdatum).toISOString().split('T')[0] : '',
        Strasse: initialData.Strasse || '',
        Hausnummer: initialData.Hausnummer || '',
        Postleitzahl: initialData.Postleitzahl || '',
        Ort: initialData.Ort || '',
        Email: initialData.Email || '',
        HandyNr: initialData.HandyNr || '',
        Rolle: initialData.Vereinszuordnung?.[0]?.Rolle || 'mitglied'
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
            <div>
            <label htmlFor="Vorname" className="block text-sm font-medium text-gray-700">Vorname *</label>
            <input
                type="text"
                name="Vorname"
                id="Vorname"
                required
                value={formData.Vorname}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Nachname *</label>
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

            <div>
            <label htmlFor="Geburtsdatum" className="block text-sm font-medium text-gray-700">Geburtsdatum</label>
            <input
                type="date"
                name="Geburtsdatum"
                id="Geburtsdatum"
                value={formData.Geburtsdatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">E-Mail *</label>
            <input
                type="email"
                name="Email"
                id="Email"
                required
                value={formData.Email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="HandyNr" className="block text-sm font-medium text-gray-700">Telefonnummer</label>
            <input
                type="tel"
                name="HandyNr"
                id="HandyNr"
                value={formData.HandyNr}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Rolle" className="block text-sm font-medium text-gray-700">Rolle im Verein</label>
            <select
                id="Rolle"
                name="Rolle"
                value={formData.Rolle}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="mitglied">Mitglied</option>
                <option value="admin">Admin</option>
            </select>
            </div>

            <div>
            <label htmlFor="Strasse" className="block text-sm font-medium text-gray-700">Straße</label>
            <input
                type="text"
                name="Strasse"
                id="Strasse"
                value={formData.Strasse}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Hausnummer" className="block text-sm font-medium text-gray-700">Hausnummer</label>
            <input
                type="text"
                name="Hausnummer"
                id="Hausnummer"
                value={formData.Hausnummer}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Postleitzahl" className="block text-sm font-medium text-gray-700">Postleitzahl</label>
            <input
                type="text"
                name="Postleitzahl"
                id="Postleitzahl"
                value={formData.Postleitzahl}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Ort" className="block text-sm font-medium text-gray-700">Ort</label>
            <input
                type="text"
                name="Ort"
                id="Ort"
                value={formData.Ort}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/mitglieder')}
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