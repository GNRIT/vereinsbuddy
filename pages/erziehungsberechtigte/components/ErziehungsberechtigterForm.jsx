import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ErziehungsberechtigterForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        JF_Mitglied_ID: initialData.JF_Mitglied_ID || '',
        Person_ID: initialData.Person_ID || '',
    })
    const [mitglieder, setMitglieder] = useState([])
    const [personen, setPersonen] = useState([])
    const [loading, setLoading] = useState(true)

    const router = useRouter()

    useEffect(() => {
        async function fetchData() {
        const [mitgliederRes, personenRes] = await Promise.all([
            fetch('/api/jugend/mitglieder'),
            fetch('/api/personen')
        ])
        
        setMitglieder(await mitgliederRes.json())
        setPersonen(await personenRes.json())
        setLoading(false)
        }
        
        fetchData()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
        ...prev,
        [name]: parseInt(value)
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await onSubmit(formData)
    }

    if (loading) return <div>Laden...</div>

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label htmlFor="JF_Mitglied_ID" className="block text-sm font-medium text-gray-700">
                Jugendmitglied *
            </label>
            <select
                name="JF_Mitglied_ID"
                id="JF_Mitglied_ID"
                required
                value={formData.JF_Mitglied_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="">Bitte auswählen</option>
                {mitglieder.map((mitglied) => (
                <option key={mitglied.ID} value={mitglied.ID}>
                    {mitglied.Vorname} {mitglied.Name} (ID: {mitglied.ID})
                </option>
                ))}
            </select>
            </div>

            <div>
            <label htmlFor="Person_ID" className="block text-sm font-medium text-gray-700">
                Erziehungsberechtigter *
            </label>
            <select
                name="Person_ID"
                id="Person_ID"
                required
                value={formData.Person_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="">Bitte auswählen</option>
                {personen.map((person) => (
                <option key={person.ID} value={person.ID}>
                    {person.Vorname} {person.Name} (ID: {person.ID})
                </option>
                ))}
            </select>
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/jugend/erziehungsberechtigte')}
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