import { products } from '~/server/db/schema'
import { useDb } from '~/server/db/orm/drizzle'

export default defineEventHandler(async () => {
  const db = useDb()

  const result = await db.select().from(products)
  return result
})
