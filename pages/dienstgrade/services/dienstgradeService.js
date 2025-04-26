import { vereinDbPrisma as prisma } from '../../../../lib/prisma'

export async function getDienstgrade() {
    return await prisma.dienstgrad.findMany({
        orderBy: {
        Abkuerzung_maennlich: 'asc',
        },
    })
    }

    export async function getDienstgradById(id) {
    return await prisma.dienstgrad.findUnique({
        where: { id: parseInt(id) },
    })
    }

    export async function createDienstgrad(data) {
    return await prisma.dienstgrad.create({
        data: {
        ...data,
        Erstellt_am: new Date(),
        },
    })
}

export async function updateDienstgrad(id, data) {
    return await prisma.dienstgrad.update({
        where: { id: parseInt(id) },
        data: {
        ...data,
        Geaendert_am: new Date(),
        },
    })
}

export async function deleteDienstgrad(id) {
    return await prisma.dienstgrad.delete({
        where: { id: parseInt(id) },
    })
}