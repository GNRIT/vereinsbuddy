import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function TeilnahmeForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Mitglied_ID: initialData.Mitglied_ID || '',
        Einsatz_ID: initialData.Einsatz_ID || '',
        Typ: initialData.Typ || 'einsatz',
    })
    const [mitglieder, setMitglieder] = useState([])
    const [einsaetze, setEinsaetze] = useState([])

    const router = useRouter()

    useEffect(() => {
        // Mitglieder laden
        fetch('/api/mitglieder')
        .then(res => res.json())
        .then(data => setMitglieder(data))
        .catch(err => console.error('Fehler beim Laden der Mitglieder:', err))

        // einsaetze laden
        fetch('/api/einsatz')
        .then(res => res.json())
        .then(data => setEinsaetze(data))
        .catch(err => console.error('Fehler beim Laden der Einsaetze:', err))
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
            <select name="Mitglied_ID" id="Mitglied_ID" required>
                <option value="">Bitte wählen</option>
                {
                    (() => {
                        const options = [];
                        for (const key in mitglieder) {
                            const mitglied = mitglieder[key];
                            options.push(
                                <option key={mitglied.ID} value={mitglied.ID}>
                                    {mitglied.Vorname} {mitglied.Name}
                                </option>
                            );
                        }
                        return options;
                    })()
                }
            </select>

            </div>

            <div>
            <label htmlFor="Einsatz_ID" className="block text-sm font-medium text-gray-700">Einsaetze *</label>
            
            <select name="Einsatz_ID" id="Einsatz_ID" required>
                <option value="">Bitte wählen</option>
                {
                    (() => {
                        const options = [];
                        for (const key in einsaetze) {
                            const einsatz = einsaetze[key];
                            options.push(
                                <option key={einsatz.ID} value={einsatz.ID}>
                                    {einsatz.ID} {einsatz.Einsatznummer}
                                </option>
                            );
                        }
                        return options;
                    })()
                }
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