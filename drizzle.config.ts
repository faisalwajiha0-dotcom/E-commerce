import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/db/schema',
  out: './server/db/migrations',
  dialect: 'sqlite',
  driver: 'durable-sqlite',
  dbCredentials: {
    url: process.env.NUXT_DATABASE_URL || '',
    authToken: process.env.NUXT_DATABASE_AUTH_TOKEN || '',
  }
})