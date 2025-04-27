import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function TeilnahmeForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Mitglied_ID: initialData.Mitglied_ID || '',
        Veranstaltung_ID: initialData.Veranstaltung_ID || '',
        Typ: initialData.Typ || 'einsatz',
    })
    const [mitglieder, setMitglieder] = useState([])
    const [veranstaltungen, setVeranstaltungen] = useState([])

    const router = useRouter()

    useEffect(() => {
        // Mitglieder laden
        fetch('/api/mitglieder')
        .then(res => res.json())
        .then(data => setMitglieder(data))
        .catch(err => console.error('Fehler beim Laden der Mitglieder:', err))

        // Veranstaltungen laden
        fetch('/api/veranstaltungen')
        .then(res => res.json())
        .then(data => setVeranstaltungen(data))
        .catch(err => console.error('Fehler beim Laden der Veranstaltungen:', err))
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
        <div className="grid grid-cols-1 gap-6">
            <div>
            <label htmlFor="Mitglied_ID" className="block text-sm font-medium text-gray-700">Mitglied *</label>
            <select
                id="Mitglied_ID"
                name="Mitglied_ID"
                required
                value={formData.Mitglied_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="">Bitte wählen</option>
                {mitglieder.map((mitglied) => (
                <option key={mitglied.ID} value={mitglied.ID}>
                    {mitglied.Vorname} {mitglied.Name}
                </option>
                ))}
            </select>
            </div>

            <div>
            <label htmlFor="Veranstaltung_ID" className="block text-sm font-medium text-gray-700">Veranstaltung *</label>
            <select
                id="Veranstaltung_ID"
                name="Veranstaltung_ID"
                required
                value={formData.Veranstaltung_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="">Bitte wählen</option>
                {veranstaltungen.map((veranstaltung) => (
                <option key={veranstaltung.ID} value={veranstaltung.ID}>
                    {veranstaltung.Titel} ({new Date(veranstaltung.StartDatum).toLocaleDateString()})
                </option>
                ))}
            </select>
            </div>

            <div>
            <label htmlFor="Typ" className="block text-sm font-medium text-gray-700">Teilnahme-Typ *</label>
            <select
                id="Typ"
                name="Typ"
                required
                value={formData.Typ}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="einsatz">Einsatz</option>
                <option value="dienstabend">Dienstabend</option>
            </select>
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/teilnahmen')}
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