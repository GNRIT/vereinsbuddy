import prisma from "@/lib/prisma";

export async function GET(req, { params }) {
    const { subdomain } = params;

    const vereins = await prisma.verein.findUnique({
        where: { subdomain },
    });

    if (!vereins) {
        return new Response("Verein nicht gefunden", { status: 404 });
    }

    const einsätze = await prisma.einsatz.findMany({
        where: { verein_id: vereins.id },
        orderBy: { datum: "desc" },
    });

    return new Response(JSON.stringify(einsätze), {
        headers: { "Content-Type": "application/json" },
    });
    }

    export async function POST(req, { params }) {
    const { subdomain } = params;
    const { beschreibung, datum } = await req.json();

    const vereins = await prisma.verein.findUnique({
        where: { subdomain },
    });

    if (!vereins) {
        return new Response("Verein nicht gefunden", { status: 404 });
    }

    const neuerEinsatz = await prisma.einsatz.create({
        data: {
        verein_id: vereins.id,
        beschreibung,
        datum: new Date(datum),
        },
    });

    return new Response(JSON.stringify(neuerEinsatz), { status: 201 });
}
