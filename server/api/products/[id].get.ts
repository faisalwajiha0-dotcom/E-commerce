import { db } from '~~/server/utils/db'
import { products } from '~~/server/db/schema/products'
import { eq } from 'drizzle-orm'
import { getRouterParam, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid product ID'
    })
  }

  const result = await db
    .select()
    .from(products)
    .where(eq(products.id, id))
    .limit(1)

  if (!result.length) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    })
  }

  return result[0]
})