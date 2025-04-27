import { useRouter } from 'next/router'
import { useState } from 'react'

export default function FahrzeugForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Kennzeichen: initialData.Kennzeichen || '',
        Fahrzeugtyp: initialData.Fahrzeugtyp || '',
        Besatzungsstaerke: initialData.Besatzungsstaerke || '',
        Status: initialData.Status || 'verfuegbar'
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
            <label htmlFor="Kennzeichen" className="block text-sm font-medium text-gray-700">Kennzeichen</label>
            <input
                type="text"
                name="Kennzeichen"
                id="Kennzeichen"
                value={formData.Kennzeichen}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Fahrzeugtyp" className="block text-sm font-medium text-gray-700">Fahrzeugtyp</label>
            <input
                type="text"
                name="Fahrzeugtyp"
                id="Fahrzeugtyp"
                value={formData.Fahrzeugtyp}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Besatzungsstaerke" className="block text-sm font-medium text-gray-700">Besatzungsstärke</label>
            <input
                type="text"
                name="Besatzungsstaerke"
                id="Besatzungsstaerke"
                value={formData.Besatzungsstaerke}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label htmlFor="Status" className="block text-sm font-medium text-gray-700">Status</label>
            <select
                id="Status"
                name="Status"
                value={formData.Status}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="verfuegbar">Verfügbar</option>
                <option value="im_einsatz">Im Einsatz</option>
                <option value="in_wartung">In Wartung</option>
                <option value="ausser_dienst">Außer Dienst</option>
            </select>
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/fahrzeuge')}
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