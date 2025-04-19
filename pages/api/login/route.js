import prisma from "@/lib/prisma";
import { verifyPassword } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    const { login, passwort } = body;

    const konto = await prisma.benutzerkonto.findFirst({
        where: {
        OR: [
            { benutzername: login },
            { person: { email: login } }
        ],
        },
        include: { person: true },
    });

    if (!konto || !konto.aktiv) {
        return NextResponse.json({ error: "Benutzer nicht gefunden oder deaktiviert" }, { status: 401 });
    }

    const gültig = await verifyPassword(passwort, konto.passwort_hash);
    if (!gültig) {
        return NextResponse.json({ error: "Falsches Passwort" }, { status: 401 });
    }

    const vereine = await prisma.vereinszuordnung.findMany({
        where: { personId: konto.person_id },
        include: { verein: true },
    });

    return NextResponse.json({
        benutzerId: konto.id,
        personId: konto.person_id,
        name: `${konto.person.vorname} ${konto.person.nachname}`,
        vereine: vereine.map(z => ({
        id: z.verein.id,
        name: z.verein.name,
        subdomain: z.verein.subdomain,
        })),
    });
}
