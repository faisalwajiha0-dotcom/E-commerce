import { db } from '../../db'
import { cart } from '../../db/schema'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  await db.insert(cart).values({
    userId: body.userId,
    productId: body.productId,
    quantity: body.quantity || 1,
  })

  return { success: true, message: 'Added to cart' }
})
