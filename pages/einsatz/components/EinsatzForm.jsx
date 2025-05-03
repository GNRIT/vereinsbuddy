import { useState } from 'react';

export default function EinsatzForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        Einsatznummer: initialData.Einsatznummer || '',
        Beschreibung: initialData.Beschreibung || '',
        Datum_Anfang: initialData.Datum_Anfang
            ? new Date(initialData.Datum_Anfang).toISOString().slice(0, 16)
            : '',
        Datum_Ende: initialData.Datum_Ende
            ? new Date(initialData.Datum_Ende).toISOString().slice(0, 16)
            : '',
        Uhrzeit_Anfang: initialData.Uhrzeit_Anfang
            ? new Date(initialData.Uhrzeit_Anfang).toISOString().substring(11, 16)
            : '', // => "HH:MM"
        Ort: initialData.Ort || '',
        Art: initialData.Art || '',
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Formular gesendet mit Daten:', formData);

        await onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">

                <div>
                    <label htmlFor="Einsatznummer" className="block text-sm font-medium text-gray-700">
                        Einsatznummer *
                    </label>
                    <input
                        type="text"
                        name="Einsatznummer"
                        id="Einsatznummer"
                        required
                        value={formData.Einsatznummer}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    />
                </div>

                <div>
                    <label htmlFor="Beschreibung" className="block text-sm font-medium text-gray-700">
                        Beschreibung
                    </label>
                    <textarea
                        name="Beschreibung"
                        id="Beschreibung"
                        rows={4}
                        value={formData.Beschreibung}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label htmlFor="Datum_Anfang" className="block text-sm font-medium text-gray-700">
                            Datum Anfang *
                        </label>
                        <input
                            type="date"
                            name="Datum_Anfang"
                            id="Datum_Anfang"
                            required
                            value={formData.Datum_Anfang}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                        />
                    </div>

                    <div>
                        <label htmlFor="Uhrzeit_Anfang" className="block text-sm font-medium text-gray-700">
                            Uhrzeit Anfang *
                        </label>
                        <input
                            type="time"
                            name="Uhrzeit_Anfang"
                            id="Uhrzeit_Anfang"
                            required
                            value={formData.Uhrzeit_Anfang}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                        />
                    </div>

                    <div>
                        <label htmlFor="Datum_Ende" className="block text-sm font-medium text-gray-700">
                            Datum Ende
                        </label>
                        <input
                            type="datetime-local"
                            name="Datum_Ende"
                            id="Datum_Ende"
                            value={formData.Datum_Ende}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="Ort" className="block text-sm font-medium text-gray-700">
                        Ort *
                    </label>
                    <input
                        type="text"
                        name="Ort"
                        id="Ort"
                        required
                        value={formData.Ort}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    />
                </div>

                <div>
                    <label htmlFor="Art" className="block text-sm font-medium text-gray-700">
                        Einsatzart *
                    </label>
                    <select
                        name="Art"
                        id="Art"
                        required
                        value={formData.Art}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    >
                        <option value="">-- bitte wählen --</option>
                        <option value="brand">Brand</option>
                        <option value="hilfeleistung">Hilfeleistung</option>
                        <option value="sonstiges">Sonstiges</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={() => window.history.back()} 
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Abbrechen
                </button>
                <button
                    type="submit"
                    className="py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                    Speichern
                </button>
            </div>
        </form>
    );
}
