import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

const url = process.env.DATABASE_URL
const authToken = process.env.DATABASE_AUTH_TOKEN

if (!url) {
  throw new Error('DATABASE_URL missing')
}

const client = createClient({
  url,
  authToken
})

export const db = drizzle(client)