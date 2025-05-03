import { useRouter } from 'next/router';
import { useState } from 'react';

export default function JFErziehungsberechtigterForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        JF_Mitglied_ID: initialData.JF_Mitglied_ID || '',
        Person_ID: initialData.Person_ID || '',
        ErstellT_am: initialData.Erstellt_am
            ? new Date(initialData.Erstellt_am).toISOString().split('T')[0] 
            : '',
    });

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData(prev => ({
            ...prev,
            [name]: name === 'JF_Mitglied_ID' || name === 'Person_ID'
                ? (value === '' ? null : parseInt(value))
                : value,
        }));
    };
    
    

    const handleSubmit = async (e) => {
        e.preventDefault(); // Verhindert Seitenreload
        if (onSubmit) {
            onSubmit(formData); // Übergibt Daten an neu.jsx
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="JF_Mitglied_ID" className="block text-sm font-medium text-gray-700">
                        JF-Mitglied ID *
                    </label>
                    <input
                        type="number"
                        name="JF_Mitglied_ID"
                        id="JF_Mitglied_ID"
                        required
                        value={formData.JF_Mitglied_ID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="Person_ID" className="block text-sm font-medium text-gray-700">
                        Erziehungsberechtigter ID *
                    </label>
                    <input
                        type="number"
                        name="Person_ID"
                        id="Person_ID"
                        required
                        value={formData.Person_ID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
            <label htmlFor="ErstellT_am" className="block text-sm font-medium text-gray-700">Erstellt am</label>
            <input
                type="date"
                name="ErstellT_am"
                id="ErstellT_am"
                value={formData.ErstellT_am}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </div>

            <div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={() => router.push('/jf_erziehungsberechtigter')}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Abbrechen
                </button>
                <button
                    type="submit"
                    className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                    Speichern
                </button>
            </div>
        </form>
    );
}
