import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function MitgliedFunktionForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Mitglied_ID: initialData.Mitglied_ID || '',
        Funktion_ID: initialData.Funktion_ID || '',
        Typ: initialData.Typ || 'ff',
    })
    const [mitglieder, setMitglieder] = useState([])
    const [funktionen, setFunktionen] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()

    useEffect(() => {
        async function fetchData() {
        const [mitgliederRes, funktionenRes] = await Promise.all([
            fetch('/api/mitglieder'),
            fetch('/api/funktionen'),
        ])
        
        setMitglieder(await mitgliederRes.json())
        setFunktionen(await funktionenRes.json())
        setIsLoading(false)
        }
        
        fetchData()
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
        await onSubmit({
        ...formData,
        Erstellt_am: new Date().toISOString(),
        })
    }

    if (isLoading) {
        return <div className="p-4">Laden...</div>
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
            <div>
            <label htmlFor="Mitglied_ID" className="block text-sm font-medium text-gray-700">Mitglied *</label>
            <select
                name="Mitglied_ID"
                id="Mitglied_ID"
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
            <label htmlFor="Funktion_ID" className="block text-sm font-medium text-gray-700">Funktion *</label>
            <select
                name="Funktion_ID"
                id="Funktion_ID"
                required
                value={formData.Funktion_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="">Bitte wählen</option>
                {funktionen.map((funktion) => (
                <option key={funktion.ID} value={funktion.ID}>
                    {funktion.Name} ({funktion.Ist_admin ? 'Admin' : 'Standard'})
                </option>
                ))}
            </select>
            </div>

            <div>
            <label htmlFor="Typ" className="block text-sm font-medium text-gray-700">Typ *</label>
            <select
                name="Typ"
                id="Typ"
                required
                value={formData.Typ}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="ff">Freiwillige Feuerwehr (FF)</option>
                <option value="jf">Jugendfeuerwehr (JF)</option>
            </select>
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/mitglied-funktionen')}
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