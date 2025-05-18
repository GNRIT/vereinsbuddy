import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function AllergieForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        FF_Mitglied_ID: initialData.FF_Mitglied_ID || '',
        JF_Mitglied_ID: initialData.JF_Mitglied_ID || '',
        Allergie: initialData.Allergie || '',
        Beschreibung: initialData.Beschreibung || ''
    })

    const [ffMitglieder, setFfMitglieder] = useState([])
    const [jfMitglieder, setJfMitglieder] = useState([])

    const router = useRouter()

    useEffect(() => {
        async function loadMitglieder() {
        try {
            const [ffRes, jfRes] = await Promise.all([
            fetch('/api/ff-mitglieder'),
            fetch('/api/jf-mitglieder')
            ])
            const [ffData, jfData] = await Promise.all([ffRes.json(), jfRes.json()])
            setFfMitglieder(ffData.data || [])
            setJfMitglieder(jfData.data || [])
        } catch (error) {
            console.error('Fehler beim Laden der Mitglieder:', error)
        }
        }

        loadMitglieder()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target

        // Wenn FF gewählt wird, JF deaktivieren (und umgekehrt)
        if (name === 'FF_Mitglied_ID') {
        setFormData((prev) => ({ ...prev, [name]: value, JF_Mitglied_ID: '' }))
        } else if (name === 'JF_Mitglied_ID') {
        setFormData((prev) => ({ ...prev, [name]: value, FF_Mitglied_ID: '' }))
        } else {
        setFormData((prev) => ({ ...prev, [name]: value }))
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.Allergie || (!formData.FF_Mitglied_ID && !formData.JF_Mitglied_ID)) {
        alert('Bitte eine Allergie angeben und ein Mitglied auswählen.')
        return
        }

        const payload = {
        ...formData,
        FF_Mitglied_ID: formData.FF_Mitglied_ID ? parseInt(formData.FF_Mitglied_ID, 10) : null,
        JF_Mitglied_ID: formData.JF_Mitglied_ID ? parseInt(formData.JF_Mitglied_ID, 10) : null
        }

        await onSubmit(payload)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label htmlFor="FF_Mitglied_ID" className="block text-sm font-medium text-gray-700">
                Feuerwehr-Mitglied
            </label>
            <select
                name="FF_Mitglied_ID"
                id="FF_Mitglied_ID"
                value={formData.FF_Mitglied_ID}
                onChange={handleChange}
                disabled={!!formData.JF_Mitglied_ID}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            >
                <option value="">Bitte auswählen</option>
                {ffMitglieder.map((m) => (
                <option key={m.ID} value={m.ID}>
                    {m.ID}
                </option>
                ))}
            </select>
            </div>

            <div>
            <label htmlFor="JF_Mitglied_ID" className="block text-sm font-medium text-gray-700">
                Jugendfeuerwehr-Mitglied
            </label>
            <select
                name="JF_Mitglied_ID"
                id="JF_Mitglied_ID"
                value={formData.JF_Mitglied_ID}
                onChange={handleChange}
                disabled={!!formData.FF_Mitglied_ID}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            >
                <option value="">Bitte auswählen</option>
                {jfMitglieder.map((m) => (
                <option key={m.ID} value={m.ID}>
                    {m.ID}
                </option>
                ))}
            </select>
            </div>
        </div>

        <div>
            <label htmlFor="Allergie" className="block text-sm font-medium text-gray-700">Allergie *</label>
            <input
            type="text"
            name="Allergie"
            id="Allergie"
            value={formData.Allergie}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
        </div>

        <div>
            <label htmlFor="Beschreibung" className="block text-sm font-medium text-gray-700">Beschreibung</label>
            <textarea
            name="Beschreibung"
            id="Beschreibung"
            rows={4}
            value={formData.Beschreibung}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/allergien')}
            className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
            Abbrechen
            </button>
            <button
            type="submit"
            className="py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
            Speichern
            </button>
        </div>
        </form>
    )
}