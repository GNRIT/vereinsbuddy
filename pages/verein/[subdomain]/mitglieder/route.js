import prisma from "@/lib/prisma";

export async function GET(req, { params }) {
    const { subdomain } = params;

    // Hier erfolgt die Zuordnung zur richtigen Vereins-Datenbank
    // Die Subdomain kann genutzt werden, um die spezifische DB zu referenzieren
    const vereins = await prisma.verein.findUnique({
        where: { subdomain },
    });

    if (!vereins) {
        return new Response("Verein nicht gefunden", { status: 404 });
    }

    // Mitglieder aus der Vereins-Datenbank abrufen
    const mitglieder = await prisma.ff_mitglied.findMany({
        where: { verein_id: vereins.id }, // Abfrage der Mitglieder für den Verein
        include: { person: true, dienstgrad: true },
    });

    // Rückgabe der Mitglieder-Daten
    const mitgliederDaten = mitglieder.map((mitglied) => ({
        id: mitglied.id,
        name: `${mitglied.person.vorname} ${mitglied.person.nachname}`,
        dienstgrad: mitglied.dienstgrad ? mitglied.dienstgrad.name : "Unbekannt",
    }));

    return new Response(JSON.stringify(mitgliederDaten), {
        headers: { "Content-Type": "application/json" },
    });
}
