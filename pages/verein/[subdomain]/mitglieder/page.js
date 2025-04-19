'use client';

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MitgliederListe() {
    const { subdomain } = useParams();
    const router = useRouter();
    const [mitglieder, setMitglieder] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const gespeicherte = localStorage.getItem("vereine");
        if (!gespeicherte) {
        router.push("/login");
        return;
        }

        const vereine = JSON.parse(gespeicherte);
        const verein = vereine.find((v) => v.subdomain === subdomain);

        if (!verein) {
        router.push("/verein-auswahl");
        return;
        }

        // API-Call oder DB-Abfrage für Mitglieder des Vereins
        fetch(`/api/verein/${subdomain}/mitglieder`)
        .then((res) => res.json())
        .then((data) => setMitglieder(data))
        .catch((err) => setError("Fehler beim Laden der Mitglieder"));
    }, [subdomain]);

    const handleDetailView = (mitgliedId) => {
        router.push(`/verein/${subdomain}/mitglieder/${mitgliedId}`);
    };

    if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

    return (
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <h1 className="text-3xl font-bold">Mitgliederliste</h1>
        <div className="bg-white rounded shadow p-6">
            {mitglieder.length === 0 ? (
            <p className="text-center">Keine Mitglieder gefunden.</p>
            ) : (
            <ul className="space-y-4">
                {mitglieder.map((mitglied) => (
                <li
                    key={mitglied.id}
                    className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded shadow-sm cursor-pointer"
                    onClick={() => handleDetailView(mitglied.id)}
                >
                    <span>{mitglied.name}</span>
                    <span className="text-sm text-gray-500">{mitglied.dienstgrad}</span>
                </li>
                ))}
            </ul>
            )}
        </div>
        </div>
    );
}
