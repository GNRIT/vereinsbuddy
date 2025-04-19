'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [passwort, setPasswort] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ login, passwort }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Fehler beim Login");
      return;
    }

    const data = await res.json();

    if (data.vereine.length === 1) {
      router.push(`/verein/${data.vereine[0].subdomain}`);
    } else {
      localStorage.setItem("vereine", JSON.stringify(data.vereine));
      router.push("/verein-auswahl");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 space-y-6">
      <h1 className="text-2xl font-bold">Vereinsbuddy</h1>
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Benutzername oder E-Mail"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Passwort"
          value={passwort}
          onChange={(e) => setPasswort(e.target.value)}
          className="w-full border p-2 rounded"
        />
        {error && <div className="text-red-600">{error}</div>}
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Einloggen
        </button>
      </form>
    </div>
  );
}
