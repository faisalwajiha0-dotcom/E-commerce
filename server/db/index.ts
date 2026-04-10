// server/db/index.ts
import { drizzle } from 'drizzle-orm/d1'
import * as schema from './schema'

// hubDatabase() خود بخود NuxtHub کے SQLite/D1 ڈیٹا بیس کو کنیکٹ کر دے گا
export const db = drizzle(hubDatabase(), { schema })
