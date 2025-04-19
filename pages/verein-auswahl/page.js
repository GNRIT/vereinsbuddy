'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function VereinsAuswahlPage() {
    const [vereine, setVereine] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const gespeicherte = localStorage.getItem("vereine");
        if (gespeicherte) {
        setVereine(JSON.parse(gespeicherte));
        } else {
        // Kein Verein gespeichert – zurück zum Login
        router.push("/login");
        }
    }, []);

    function wählen(verein) {
        router.push(`/verein/${verein.subdomain}`);
    }

    return (
        <div className="max-w-md mx-auto mt-20 space-y-6">
        <h1 className="text-2xl font-bold">Wähle deinen Verein</h1>
        {vereine.map((verein) => (
            <button
            key={verein.id}
            onClick={() => wählen(verein)}
            className="block w-full bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded text-left"
            >
            {verein.name}
            </button>
        ))}
        </div>
    );
}
