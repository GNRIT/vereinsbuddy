import { PrismaClient as VereinDbClient } from '@/generated/verein_db'
import { PrismaClient as VereinsbuddyClient } from '@/generated/vereinsbuddy'

export const db1 = new VereinsbuddyClient()
export const db2 = new VereinDbClient()
