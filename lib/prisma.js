const { PrismaClient: VereinsbuddyClient } = require('@/generated/vereinsbuddy')
const { PrismaClient: VereinDbClient } = require('@/generated/verein_db')

const db1 = new VereinsbuddyClient()
const db2 = new VereinDbClient()

module.exports = { db1, db2 }


/*import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

const vereinsbuddyPrisma = globalForPrisma.vereinsbuddyPrisma || new PrismaClient({
    datasources: {
        db: {
        url: process.env.DATABASE_URL_vereinsbuddy
        }
    }
    })

    const vereinDbPrisma = globalForPrisma.vereinDbPrisma || new PrismaClient({
    datasources: {
        db: {
        url: process.env.DATABASE_URL_verein_db
        }
    }
    })

    if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.vereinsbuddyPrisma = vereinsbuddyPrisma
    globalForPrisma.vereinDbPrisma = vereinDbPrisma
}

export { vereinDbPrisma, vereinsbuddyPrisma }*/
