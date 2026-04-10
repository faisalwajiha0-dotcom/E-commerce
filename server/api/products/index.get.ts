// server/api/products/index.get.ts
import { db } from '../../db'
import { products } from '../../db/schema'

export default defineEventHandler(async () => {
  try {
    const result = await db.select().from(products)
    return result
  }
  catch (error) {
    return { error: 'Failed to fetch products' }
  }
})
