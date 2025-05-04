// lib/prisma.js
import { PrismaClient as VereinDbClient } from '@/generated/verein_db';
import { PrismaClient as VereinsbuddyClient } from '@/generated/vereinsbuddy';

const db1 = global.db1 || new VereinsbuddyClient();
const db2 = global.db2 || new VereinDbClient();

if (process.env.NODE_ENV === 'production') {
    global.db1 = db1;
    global.db2 = db2;
}

    export {
    db2 as vereinDbPrisma, db1 as vereinsbuddyPrisma
};



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
