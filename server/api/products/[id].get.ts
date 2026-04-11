import { getRouterParam, createError } from 'h3'
import { eq } from 'drizzle-orm'
import { products } from '~/server/db/schema'
import { getDB } from '~/server/db/orm/drizzle'

export default defineEventHandler(async event => {
  const id = Number(getRouterParam(event, 'id'))
  const db = getDB()

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
