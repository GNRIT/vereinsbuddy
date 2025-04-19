'use client';

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MitgliedDetail() {
    const { subdomain, mitgliedId } = useParams();
    const router = useRouter();
    const [mitglied, setMitglied] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/api/verein/${subdomain}/mitglieder/${mitgliedId}`)
        .then((res) => res.json())
        .then((data) => setMitglied(data))
        .catch((err) => setError("Fehler beim Laden der Mitgliedsdaten"));
    }, [subdomain, mitgliedId]);

    if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
    if (!mitglied) return <p className="text-center mt-20">Lade Mitglied...</p>;

    return (
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <h1 className="text-3xl font-bold">{mitglied.name}</h1>
        <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <p><strong>Dienstgrad:</strong> {mitglied.dienstgrad}</p>
            <p><strong>Eintrittsdatum:</strong> {mitglied.eintrittsdatum}</p>
            {/* Weitere Mitgliederinformationen anzeigen */}
        </div>
        </div>
    );
}
