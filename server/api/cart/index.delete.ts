import { db } from '../../db'
import { cart } from '../../db/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  await db.delete(cart).where(eq(cart.id, body.id))

  return { success: true, message: 'Removed from cart' }
})
