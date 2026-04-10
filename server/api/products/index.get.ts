// server/api/products/index.get.ts
import { db } from '~~/server/db' // 'db' کو یہاں سے امپورٹ کریں
import { products } from '~~/server/db/schema'

export default eventHandler(async () => {
  // اب یہاں 'db' استعمال کریں
  const allProducts = await db.select().from(products).all()
  return allProducts
})
