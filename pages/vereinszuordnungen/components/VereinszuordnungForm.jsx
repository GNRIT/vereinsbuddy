import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function VereinszuordnungForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Person_ID: initialData.Person_ID || '',
        Verein_ID: initialData.Verein_ID || '',
        Rolle: initialData.Rolle || 'mitglied',
    });

    const [personen, setPersonen] = useState([]);
    const [vereine, setVereine] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            try {
                const [personenRes, vereineRes] = await Promise.all([
                    fetch('/api/personen').then(res => res.json()),
                    fetch('/api/vereine').then(res => res.json())
                ]);
                setPersonen(personenRes);
                setVereine(vereineRes);
            } catch (error) {
                console.error('Fehler beim Laden der Daten:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit({
            Person_ID: parseInt(formData.Person_ID),
            Verein_ID: parseInt(formData.Verein_ID),
            Rolle: formData.Rolle,
        });
    };

    if (isLoading) {
        return <div>Laden...</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
                {/* Mitglied (Person) */}
                <div>
                    <label htmlFor="Person_ID" className="block text-sm font-medium text-gray-700">Mitglied *</label>
                    <select
                        name="Person_ID"
                        id="Person_ID"
                        required
                        value={formData.Person_ID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Mitglied auswählen</option>
                        {personen.map((person) => (
                            <option key={person.ID} value={person.ID}>
                                {person.Vorname} {person.Name} ({person.Email})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Verein */}
                <div>
                    <label htmlFor="Verein_ID" className="block text-sm font-medium text-gray-700">Verein *</label>
                    <select
                        name="Verein_ID"
                        id="Verein_ID"
                        required
                        value={formData.Verein_ID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Verein auswählen</option>
                        {vereine.map((verein) => (
                            <option key={verein.ID} value={verein.ID}>
                                {verein.Name} ({verein.Subdomain})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Rolle */}
                <div>
                    <label htmlFor="Rolle" className="block text-sm font-medium text-gray-700">Rolle *</label>
                    <select
                        name="Rolle"
                        id="Rolle"
                        required
                        value={formData.Rolle}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="mitglied">Mitglied</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={() => router.push('/vereinszuordnungen')}
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
    );
}
