import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function MitgliedForm({ initialData = {}, onSubmit }) {
    const router = useRouter()
    const [lehrgaenge, setLehrgaenge] = useState([])
    const [selectedLehrgaenge, setSelectedLehrgaenge] = useState([])
    const [formData, setFormData] = useState({
        Vorname: initialData.Vorname || '',
        Name: initialData.Name || '',
        Geburtsdatum: initialData.Geburtsdatum || null,
        Strasse: initialData.Strasse || '',
        Hausnummer: initialData.Hausnummer || '',
        Postleitzahl: initialData.Postleitzahl || '',
        Ort: initialData.Ort || '',
        Email: initialData.Email || '',
        Handynr: initialData.Handynr || '',
        Rolle: initialData.Vereinszuordnung?.[0]?.Rolle || 'mitglied'
    })

    // Lade Lehrgänge und initialisiere ausgewählte Lehrgänge
    useEffect(() => {
        async function loadLehrgaenge() {
        try {
            const res = await fetch('/api/lehrgang')
            const data = await res.json()
            setLehrgaenge(data)
            
            if (initialData.ff_mitglied?.[0]?.ff_mitglied_lehrgang) {
            setSelectedLehrgaenge(
                initialData.ff_mitglied[0].ff_mitglied_lehrgang.map(l => ({
                id: l.Lehrgang_ID,
                datum: l.Datum_bestanden,
                bezeichnung: lehrgaenge.find(lg => lg.ID === l.Lehrgang_ID)?.Beschreibung || ''
                }))
            )
            }
        } catch (error) {
            console.error('Fehler beim Laden der Lehrgänge:', error)
        }
        }
        loadLehrgaenge()
    }, [initialData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleDateChange = (date, name) => {
        setFormData(prev => ({ ...prev, [name]: date }))
    }

    const handleAddLehrgang = () => {
        setSelectedLehrgaenge(prev => [
        ...prev,
        { id: '', datum: null, bezeichnung: '' }
        ])
    }

    const handleRemoveLehrgang = (index) => {
        setSelectedLehrgaenge(prev => prev.filter((_, i) => i !== index))
    }

    const handleLehrgangChange = (index, field, value) => {
        setSelectedLehrgaenge(prev => 
        prev.map((item, i) => 
            i === index ? { ...item, [field]: value } : item
        )
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // Filter out empty Lehrgänge
        const validLehrgaenge = selectedLehrgaenge.filter(l => l.id)
        
        await onSubmit({
        personData: {
            ...formData,
            Geburtsdatum: formData.Geburtsdatum?.toISOString().split('T')[0]
        },
        lehrgaenge: validLehrgaenge.map(l => ({
            id: parseInt(l.id),
            datum: l.datum?.toISOString().split('T')[0]
        }))
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Grunddaten */}
            <div>
            <label className="block text-sm font-medium text-gray-700">Vorname *</label>
            <input
                type="text"
                name="Vorname"
                value={formData.Vorname}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Nachname *</label>
            <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Geburtsdatum</label>
            <DatePicker
                selected={formData.Geburtsdatum}
                onChange={(date) => handleDateChange(date, 'Geburtsdatum')}
                dateFormat="dd.MM.yyyy"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholderText="TT.MM.JJJJ"
            />
            </div>

            {/* Kontaktdaten */}
            <div>
            <label className="block text-sm font-medium text-gray-700">E-Mail</label>
            <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Telefonnummer</label>
            <input
                type="tel"
                name="Handynr"
                value={formData.Handynr}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Rolle im Verein</label>
            <select
                name="Rolle"
                value={formData.Rolle}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="mitglied">Mitglied</option>
                <option value="admin">Admin</option>
            </select>
            </div>

            {/* Adressdaten */}
            <div>
            <label className="block text-sm font-medium text-gray-700">Straße</label>
            <input
                type="text"
                name="Strasse"
                value={formData.Strasse}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Hausnummer</label>
            <input
                type="text"
                name="Hausnummer"
                value={formData.Hausnummer}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Postleitzahl</label>
            <input
                type="text"
                name="Postleitzahl"
                value={formData.Postleitzahl}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Ort</label>
            <input
                type="text"
                name="Ort"
                value={formData.Ort}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
        </div>

        {/* Lehrgänge Section */}
        <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Lehrgänge</h3>
            <button
                type="button"
                onClick={handleAddLehrgang}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Lehrgang hinzufügen
            </button>
            </div>

            {selectedLehrgaenge.map((lehrgang, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 border rounded-lg">
                <div>
                <label className="block text-sm font-medium text-gray-700">Lehrgang *</label>
                <select
                    value={lehrgang.id}
                    onChange={(e) => handleLehrgangChange(index, 'id', e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                    <option value="">Bitte auswählen</option>
                    {lehrgaenge.map(lg => (
                    <option key={lg.ID} value={lg.ID}>
                        {lg.Abk_rzung} - {lg.Beschreibung}
                    </option>
                    ))}
                </select>
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700">Bestanden am</label>
                <DatePicker
                    selected={lehrgang.datum}
                    onChange={(date) => handleLehrgangChange(index, 'datum', date)}
                    dateFormat="dd.MM.yyyy"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholderText="TT.MM.JJJJ"
                />
                </div>

                <div className="flex items-end">
                <button
                    type="button"
                    onClick={() => handleRemoveLehrgang(index)}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Entfernen
                </button>
                </div>
            </div>
            ))}
        </div>

        <div className="flex justify-end space-x-3 pt-6">
            <button
            type="button"
            onClick={() => router.push('/mitglieder')}
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