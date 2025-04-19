'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function VereinsDashboard() {
    const { subdomain } = useParams()
    const router = useRouter()
    const [verein, setVerein] = useState(null)

    useEffect(() => {
        const gespeicherte = localStorage.getItem("vereine");
        if (!gespeicherte) {
        router.push("/login");
        return;
        }

        const vereine = JSON.parse(gespeicherte);
        const v = vereine.find((v) => v.subdomain === subdomain);
        if (!v) {
        router.push("/verein-auswahl");
        } else {
        setVerein(v);
        }
    }, [subdomain]);

    if (!verein) return <p className="text-center mt-20">Lade Verein...</p>;

    return (
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <h1 className="text-3xl font-bold">
            Willkommen beim {verein.name}
        </h1>
        <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
            <p>Hier kommen später deine Einsätze, Mitgliederzahlen & mehr rein.</p>
            <p className="mt-4 text-sm text-gray-500">
            Subdomain: <strong>{verein.subdomain}</strong>
            </p>
        </div>
        </div>
    );
}
