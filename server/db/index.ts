// server/db/index.ts
import { drizzle } from 'drizzle-orm/d1'
import * as schema from './schema'

export const db = drizzle(hubDatabase(), { schema })
