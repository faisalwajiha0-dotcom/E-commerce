import { db } from '../../db'
import { products } from '../../db/schema'

export default defineEventHandler(async () => {
  const result = await db.select().from(products)
  return result // ✅ Must return an array
})
