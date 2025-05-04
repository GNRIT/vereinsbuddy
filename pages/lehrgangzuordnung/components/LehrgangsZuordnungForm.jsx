import { useRouter } from 'next/router'
import { useState } from 'react'

export default function LehrgangsZuordnungForm({ initialData = {}, mitglieder, lehrgaenge, onSubmit }) {
    const [formData, setFormData] = useState({
        FF_Mitglied_ID: initialData.FF_Mitglied_ID || '',
        Lehrgang_ID: initialData.Lehrgang_ID || '',
        Datum_bestanden: initialData.Datum_bestanden
        ? new Date(initialData.Datum_bestanden).toISOString().split('T')[0]
        : ''
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
            <label htmlFor="FF_Mitglied_ID" className="block text-sm font-medium text-gray-700">Mitglied ID*</label>
            <input
                id="FF_Mitglied_ID"
                name="FF_Mitglied_ID"
                required
                value={formData.FF_Mitglied_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
            </input>
            </div>

            <div>
            <label htmlFor="Lehrgang_ID" className="block text-sm font-medium text-gray-700">Lehrgang ID*</label>
            <input
                id="Lehrgang_ID"
                name="Lehrgang_ID"
                required
                value={formData.Lehrgang_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
            </input>
            </div>

            <div>
            <label htmlFor="Datum_bestanden" className="block text-sm font-medium text-gray-700">Datum bestanden</label>
            <input
                type="date"
                name="Datum_bestanden"
                id="Datum_bestanden"
                value={formData.Datum_bestanden}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/lehrgangzuordnung')}
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