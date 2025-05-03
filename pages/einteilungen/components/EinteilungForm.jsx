import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EinteilungForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Einsatz_ID: initialData.Einsatz_ID || '',
        Dienstabend_ID: initialData.Dienstabend_ID || '',
        Fahrzeug_ID: initialData.Fahrzeug_ID || '',
        FF_Mitglied_ID: initialData.FF_Mitglied_ID || '',
        Einheit_ID: initialData.Einheit_ID || '',
    })

    const [optionen, setOptionen] = useState({
        einsaetze: [],
        dienstabende: [],
        mitglieder: [],
        fahrzeuge: [],
        einheiten: [],
    })

    const router = useRouter()

    useEffect(() => {
        async function loadOptions() {
        const [einsaetze, dienstabende, mitglieder, fahrzeuge, einheiten] = await Promise.all([
            db2.einsatz.findMany(),
            db2.dientsabend.findMany(),
            db2.ff_mitglied.findMany(),
            db2.fahrzeug.findMany(),
            db2.einheit.findMany(),
        ])

        setOptionen({
            einsaetze,
            dienstabende,
            mitglieder,
            fahrzeuge,
            einheiten,
        })
        }

        loadOptions()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
        ...prev,
        [name]: value ? parseInt(value) : null
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
            <label htmlFor="Einsatz_ID" className="block text-sm font-medium text-gray-700">Einsatz ID</label>
            <input
                name="Einsatz_ID"
                id="Einsatz_ID"
                value={formData.Einsatz_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
            </input>
            </div>

            <div>
            <label htmlFor="Dienstabend_ID" className="block text-sm font-medium text-gray-700">Dienstabend ID</label>
            <input
                name="Dienstabend_ID"
                id="Dienstabend_ID"
                value={formData.Dienstabend_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
            </input>
            </div>

            <div>
            <label htmlFor="FF_Mitglied_ID" className="block text-sm font-medium text-gray-700">FF-Mitglied ID</label>
            <input
                name="FF_Mitglied_ID"
                id="FF_Mitglied_ID"
                required
                value={formData.FF_Mitglied_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
            </input>
            </div>

            <div>
            <label htmlFor="Fahrzeug_ID" className="block text-sm font-medium text-gray-700">Fahrzeug ID</label>
            <input
                name="Fahrzeug_ID"
                id="Fahrzeug_ID"
                value={formData.Fahrzeug_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
            </input>
            </div>

            <div>
            <label htmlFor="Einheit_ID" className="block text-sm font-medium text-gray-700">Einheit ID</label>
            <input
                name="Einheit_ID"
                id="Einheit_ID"
                value={formData.Einheit_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
            </input>
            </div>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/einteilungen')}
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