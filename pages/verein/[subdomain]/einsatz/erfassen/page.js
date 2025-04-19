'use client';

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function EinsatzErfassen() {
    const { subdomain } = useParams();
    const router = useRouter();
    const [beschreibung, setBeschreibung] = useState("");
    const [datum, setDatum] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/verein/${subdomain}/einsatz`, {
        method: "POST",
        body: JSON.stringify({ beschreibung, datum }),
        headers: { "Content-Type": "application/json" },
        });

        setLoading(false);

        if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Fehler beim Hinzufügen des Einsatzes");
        return;
        }

        router.push(`/verein/${subdomain}/einsatz`);
    };

    return (
        <div className="max-w-md mx-auto mt-10 space-y-6">
        <h1 className="text-3xl font-bold">Einsatz erfassen</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
            <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Beschreibung</label>
            <input
                type="text"
                value={beschreibung}
                onChange={(e) => setBeschreibung(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Kurze Beschreibung des Einsatzes"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Datum</label>
            <input
                type="date"
                value={datum}
                onChange={(e) => setDatum(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <button
            type="submit"
            disabled={loading}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
            {loading ? "Speichern..." : "Einsatz hinzufügen"}
            </button>
        </form>
        </div>
    );
}
