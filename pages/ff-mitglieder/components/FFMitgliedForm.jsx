import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function FFMitgliedForm({ initialData = {}, onSubmit }) {
    const [mitglieder, setMitglieder] = useState([])
    const [formData, setFormData] = useState({
        //ID : formData.ID,
        person_ID: initialData.Person_ID || '',
        Eintrittsdatum: initialData.Eintrittsdatum
        ? new Date(initialData.Eintrittsdatum).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0],
        Austrittsdatum: initialData.Austrittsdatum
        ? new Date(initialData.Austrittsdatum).toISOString().split('T')[0]
        : '',
        Aufnahmedatum: initialData.Aufnahmedatum
        ? new Date(initialData.Aufnahmedatum).toISOString().split('T')[0]
        : '',
        Aktiv: initialData.Status === 'aktiv',
        Erstellt_am: initialData.Erstellt_am
        ? new Date(initialData.Erstellt_am).toISOString().split('T')[0]
        : '',
        Geaendert_am: initialData.Geaendert_am
        ? new Date(initialData.Geaendert_am).toISOString().split('T')[0]
        : '',
    })

    const [allergien, setAllergien] = useState([{ allergie: '', beschreibung: '' }])
    const router = useRouter()

    useEffect(() => {
        async function loadMitglieder() {
        try {
            const res = await fetch('/api/mitglieder')
            const data = await res.json()
            setMitglieder(data.data || [])
        } catch (error) {
            console.error('Fehler beim Laden der Mitglieder:', error)
        }
        }

        loadMitglieder()
    }, [])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const addAllergieField = () => {
        setAllergien((prev) => [...prev, { allergie: '', beschreibung: '' }])
    }

    const handleAllergieChange = (index, field, value) => {
        const updated = [...allergien]
        updated[index][field] = value
        setAllergien(updated)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
        //ID : formData.ID,
        Person_ID: formData.person_ID ? parseInt(formData.person_ID, 10) : null,
        Eintrittsdatum: formData.Eintrittsdatum,
        Austrittsdatum: formData.Austrittsdatum || null,
        Aufnahmedatum: formData.Aufnahmedatum || null,
        Status: formData.Aktiv ? 'aktiv' : 'inaktiv',
        Erstellt_am: formData.Erstellt_am,
        Geaendert_am: formData.Geaendert_am || null,
        }

        const result = await onSubmit(payload)
        const mitgliedID = result?.ID || result?.id || result?.data?.ID || result?.data?.id

        if (!mitgliedID) {
        console.error('Fehlende Mitglieds-ID im Ergebnis:', result)
        return
        }

        const gefuellteAllergien = allergien.filter(
        (a) => a.allergie.trim() !== '' || (a.beschreibung && a.beschreibung.trim() !== '')
        )

        for (const allergieEntry of gefuellteAllergien) {
        try {
            await fetch('/api/allergien', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                FF_Mitglied_ID: mitgliedID,
                JF_Mitglied_ID: null,
                Allergie: allergieEntry.allergie,
                Beschreibung: allergieEntry.beschreibung || null,
            }),
            })
        } catch (err) {
            console.error('Fehler beim Speichern der Allergie:', allergieEntry, err)
        }
        }

        router.push('/ff-mitglieder')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label htmlFor="person_ID" className="block text-sm font-medium text-gray-700">Person *</label>
            <select
                name="person_ID"
                id="person_ID"
                required
                value={formData.person_ID}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            >
                <option value="">Bitte wählen</option>
                {mitglieder.map((mitglied) => (
                <option key={mitglied.ID} value={mitglied.ID}>
                    {mitglied.Name ?? `Mitglied #${mitglied.ID}`}
                </option>
                ))}
            </select>
            </div>

            <div>
            <label htmlFor="Eintrittsdatum" className="block text-sm font-medium text-gray-700">Eintrittsdatum *</label>
            <input
                type="date"
                name="Eintrittsdatum"
                id="Eintrittsdatum"
                required
                value={formData.Eintrittsdatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
            </div>

            <div>
            <label htmlFor="Austrittsdatum" className="block text-sm font-medium text-gray-700">Austrittsdatum</label>
            <input
                type="date"
                name="Austrittsdatum"
                id="Austrittsdatum"
                value={formData.Austrittsdatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
            </div>

            <div>
            <label htmlFor="Aufnahmedatum" className="block text-sm font-medium text-gray-700">Aufnahmedatum</label>
            <input
                type="date"
                name="Aufnahmedatum"
                id="Aufnahmedatum"
                value={formData.Aufnahmedatum}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
            </div>

            <div className="flex items-center mt-2">
            <input
                type="checkbox"
                name="Aktiv"
                id="Aktiv"
                checked={formData.Aktiv}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="Aktiv" className="ml-2 block text-sm text-gray-900">Aktiv</label>
            </div>
        </div>

        <div>
            <label htmlFor="Erstellt_am" className="block text-sm font-medium text-gray-700">Erstellt am</label>
            <input
            type="date"
            name="Erstellt_am"
            id="Erstellt_am"
            value={formData.Erstellt_am}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
        </div>

        <div>
            <label htmlFor="Geaendert_am" className="block text-sm font-medium text-gray-700">Geändert am</label>
            <input
            type="date"
            name="Geaendert_am"
            id="Geaendert_am"
            value={formData.Geaendert_am}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Allergien</label>
            {allergien.map((a, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                <input
                type="text"
                value={a.allergie}
                onChange={(e) => handleAllergieChange(index, 'allergie', e.target.value)}
                placeholder={`Allergie ${index + 1}`}
                className="border border-gray-300 rounded-md py-2 px-3"
                />
                <input
                type="text"
                value={a.beschreibung}
                onChange={(e) => handleAllergieChange(index, 'beschreibung', e.target.value)}
                placeholder="Beschreibung"
                className="border border-gray-300 rounded-md py-2 px-3"
                />
            </div>
            ))}
            <button
            type="button"
            onClick={addAllergieField}
            className="mt-2 inline-flex items-center px-3 py-1.5 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
            >
            + Allergie hinzufügen
            </button>
        </div>

        <div className="flex justify-end space-x-3">
            <button
            type="button"
            onClick={() => router.push('/ff-mitglieder')}
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
    )
}





{/*import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function FFMitgliedForm({ initialData = {}, onSubmit }) {
    const [mitglieder, setMitglieder] = useState([])
    const [formData, setFormData] = useState({
        person_ID: initialData.Person_ID || '',
        Eintrittsdatum: initialData.Eintrittsdatum
            ? new Date(initialData.Eintrittsdatum).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0],
        Austrittsdatum: initialData.Austrittsdatum
            ? new Date(initialData.Austrittsdatum).toISOString().split('T')[0]
            : '',
        Aufnahmedatum: initialData.Aufnahmedatum
            ? new Date(initialData.Aufnahmedatum).toISOString().split('T')[0]
            : '',
        Aktiv: initialData.Status === 'aktiv',
        Erstellt_am: initialData.Erstellt_am
            ? new Date(initialData.Erstellt_am).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0],
        Geaendert_am: new Date().toISOString().split('T')[0],
    })

    const router = useRouter()

    useEffect(() => {
        async function loadMitglieder() {
            try {
                const res = await fetch('/api/mitglieder')
                if (!res.ok) throw new Error('Fehler beim Abruf')
                const json = await res.json()
                setMitglieder(json.data) // Korrekt extrahieren
            } catch (error) {
                console.error('Fehler beim Laden der Mitglieder:', error)
            }
        }

        loadMitglieder()
    }, [])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (
            formData.Austrittsdatum &&
            new Date(formData.Austrittsdatum) < new Date(formData.Eintrittsdatum)
        ) {
            alert('Austrittsdatum darf nicht vor Eintrittsdatum liegen.')
            return
        }

        const payload = {
            Person_ID: formData.person_ID ? parseInt(formData.person_ID, 10) : null,
            Eintrittsdatum: formData.Eintrittsdatum,
            Austrittsdatum: formData.Austrittsdatum || null,
            Aufnahmedatum: formData.Aufnahmedatum || null,
            Status: formData.Aktiv ? 'aktiv' : 'inaktiv',
            Erstellt_am: formData.Erstellt_am,
            Geaendert_am: formData.Geaendert_am,
        }

        await onSubmit(payload)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Person auswählen */}
                {/*<div>
                    <label htmlFor="person_ID" className="block text-sm font-medium text-gray-700">Person *</label>
                    <select
                        name="person_ID"
                        id="person_ID"
                        required
                        value={formData.person_ID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    >
                        <option value="">Bitte wählen</option>
                        {mitglieder.map((mitglied) => (
                            <option key={mitglied.ID} value={mitglied.ID}>
                                {mitglied.Vorname} {mitglied.Name} (#{mitglied.ID})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Eintrittsdatum */}
                {/*<div>
                    <label htmlFor="Eintrittsdatum" className="block text-sm font-medium text-gray-700">Eintrittsdatum *</label>
                    <input
                        type="date"
                        name="Eintrittsdatum"
                        id="Eintrittsdatum"
                        required
                        value={formData.Eintrittsdatum}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    />
                </div>

                {/* Austrittsdatum */}
                {/*<div>
                    <label htmlFor="Austrittsdatum" className="block text-sm font-medium text-gray-700">Austrittsdatum</label>
                    <input
                        type="date"
                        name="Austrittsdatum"
                        id="Austrittsdatum"
                        value={formData.Austrittsdatum}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    />
                </div>

                {/* Aufnahmedatum */}
                {/*<div>
                    <label htmlFor="Aufnahmedatum" className="block text-sm font-medium text-gray-700">Aufnahmedatum</label>
                    <input
                        type="date"
                        name="Aufnahmedatum"
                        id="Aufnahmedatum"
                        value={formData.Aufnahmedatum}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    />
                </div>

                {/* Aktiv-Status */}
                {/*<div className="flex items-center">
                    <input
                        type="checkbox"
                        name="Aktiv"
                        id="Aktiv"
                        checked={formData.Aktiv}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="Aktiv" className="ml-2 block text-sm text-gray-900">Aktiv</label>
                </div>
            </div>

            {/* Systemdaten */}
            {/*<div>
                <label htmlFor="Erstellt_am" className="block text-sm font-medium text-gray-700">Erstellt am</label>
                <input
                    type="date"
                    name="Erstellt_am"
                    id="Erstellt_am"
                    value={formData.Erstellt_am}
                    disabled
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 text-gray-500"
                />
            </div>

            <div>
                <label htmlFor="Geaendert_am" className="block text-sm font-medium text-gray-700">Geändert am</label>
                <input
                    type="date"
                    name="Geaendert_am"
                    id="Geaendert_am"
                    value={formData.Geaendert_am}
                    disabled
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 text-gray-500"
                />
            </div>

            {/* Buttons */}
            {/*<div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={() => router.push('/ff-mitglieder')}
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
    )
}
*/}