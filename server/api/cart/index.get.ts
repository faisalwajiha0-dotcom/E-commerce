import { db } from '../../db'
import { cart, products } from '../../db/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async () => {
  const data = await db
    .select({
      id: cart.id,
      productId: cart.productId,
      quantity: cart.quantity,
      title: products.title,
      price: products.price,
      img: products.img,
    })
    .from(cart)
    .leftJoin(products, eq(cart.productId, products.id))

  return data
})
