import { db } from '~~/server/db'
import { products } from '~~/server/db/schema'

export default eventHandler(async () => {
  try {
    await db.insert(products).values([
      { title: 'Wireless Headphones', price: 9900, image: '/images/headphone.jpg', description: '...', category: 'Electronics' },
      { title: 'Stylish Jacket', price: 7900, image: '/images/jacket.jpg', description: '...', category: 'Clothing' }
      // باقی پروڈکٹس یہاں ڈالیں
    ])
    return { status: 'success', message: 'Seed data inserted!' }
  } catch (e) {
    return { status: 'error', message: e.message }
  }
})
