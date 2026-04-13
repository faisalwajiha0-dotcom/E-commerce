import { db } from '~~/server/utils/db'
import { products } from '~~/server/db/schema/products'

export default defineEventHandler(async () => {
  try {
    const result = await db.select().from(products)
    return result // Returning an array directly
  } catch (error) {
    console.error('Error fetching products:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch products'
    })
  }
})