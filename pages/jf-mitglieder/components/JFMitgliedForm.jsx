import { useRouter } from 'next/router'
import { useState } from 'react'

export default function JFMitgliedForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        person_ID: initialData.Person_ID ?? '',
        eintrittsdatum: initialData.Eintrittsdatum
            ? new Date(initialData.Eintrittsdatum).toISOString().split('T')[0] 
            : new Date().toISOString().split('T')[0],
        austrittsdatum: initialData.Austrittsdatum
            ? new Date(initialData.Austrittsdatum).toISOString().split('T')[0] 
            : '',
        aufnahmedatum: initialData.Aufnahmedatum
            ? new Date(initialData.Aufnahmedatum).toISOString().split('T')[0] 
            : '',
        aktiv: initialData.Status === 'aktiv' ? true : false,
        erstelldatum: initialData.Erstellt_am
            ? new Date(initialData.Erstellt_am).toISOString().split('T')[0] 
            : '',
        änderungsdatum: initialData.Geaendert_am
            ? new Date(initialData.Geaendert_am).toISOString().split('T')[0] 
            : '',
    })
    

    const router = useRouter()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validation
        if (!formData.person_ID || isNaN(parseInt(formData.person_ID, 10))) {
            alert('Bitte eine gültige Person_ID eingeben!');
            return;
        }
    
        const payload = {
            Person_ID: parseInt(formData.person_ID, 10),
            Eintrittsdatum: formData.eintrittsdatum || new Date().toISOString().split('T')[0],
            Austrittsdatum: formData.austrittsdatum || null,
            Aufnahmedatum: formData.aufnahmedatum || null,
            Status: formData.aktiv ? 'aktiv' : 'inaktiv',
            Erstellt_am: formData.erstelldatum || new Date().toISOString().split('T')[0],
            Geaendert_am: formData.änderungsdatum || null,
        };
    
        try {
            const res = await onSubmit(payload);
            console.log('Erfolg:', res);
        } catch (error) {
            console.error('Fehler beim Senden:', error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label htmlFor="person_ID" className="block text-sm font-medium text-gray-700">Person_ID *</label>
            <input
                type="number"
                name="person_ID"
                id="person_ID"
                required
                value={formData.person_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
            <div>
            <label htmlFor="eintrittsdatum" className="block text-sm font-medium text-gray-700">Eintrittsdatum *</label>
            <input
                type="date"
                name="eintrittsdatum"
                id="eintrittsdatum"
                required
                value={formData.eintrittsdatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
    
            <div>
            <label htmlFor="austrittsdatum" className="block text-sm font-medium text-gray-700">Austrittsdatum</label>
            <input
                type="date"
                name="austrittsdatum"
                id="austrittsdatum"
                value={formData.austrittsdatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
    
            <div>
            <label htmlFor="aufnahmedatum" className="block text-sm font-medium text-gray-700">Aufnahmedatum</label>
            <input
                type="date"
                name="aufnahmedatum"
                id="aufnahmedatum"
                value={formData.aufnahmedatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
    
            <div className="flex items-center">
            <input
                type="checkbox"
                name="aktiv"
                id="aktiv"
                checked={formData.aktiv}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="aktiv" className="ml-2 block text-sm text-gray-900">
                Aktiv
            </label>
            </div>
        </div>
    
        <div>
            <label htmlFor="erstelldatum" className="block text-sm font-medium text-gray-700">Erstellt am</label>
            <input
                type="date"
                name="erstelldatum"
                id="erstelldatum"
                value={formData.erstelldatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </div>
    
        <div>
            <label htmlFor="änderungsdatum" className="block text-sm font-medium text-gray-700">Geändert am</label>
            <input
                type="date"
                name="änderungsdatum"
                id="änderungsdatum"
                value={formData.änderungsdatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </div>

            {/* Erstell- und Änderungsdatum */}

            <div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={() => router.push('/jf-mitglieder')}
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
