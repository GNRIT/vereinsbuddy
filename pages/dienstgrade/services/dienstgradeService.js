import { vereinDbPrisma as db2 } from '@/lib/prisma';
export async function getDienstgrade() {
    return await db2.dienstgrad.findMany({
        orderBy: {
        Abkuerzung_maennlich: 'asc',
        },
    })
    }

    export async function getDienstgradById(id) {
    return await db2.dienstgrad.findUnique({
        where: { ID: parseInt(id) },
    })
    }

    export async function createDienstgrad(data) {
    return await db2.dienstgrad.create({
        data: {
        ...data,
        Erstellt_am: new Date(),
        },
    })
}

export async function updateDienstgrad(id, data) {
    return await db2.dienstgrad.update({
        where: { ID: parseInt(id) },
        data: {
        ...data,
        Geaendert_am: new Date(),
        },
    })
}

export async function deleteDienstgrad(id) {
    return await db2.dienstgrad.delete({
        where: { ID: parseInt(id) },
    })
}