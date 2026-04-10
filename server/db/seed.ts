// server/db/seed.ts
import { useDrizzle } from '#hub/server'
import { products } from './schema'

export default defineTask({
  meta: {
    name: 'db:seed',
    description: 'Seed products data'
  },
  async run() {
    const db = useDrizzle()

    await db.insert(products).values([
      {
        title: 'Wireless Headphones',
        price: 99,
        image: '/images/headphone.jpg',
        description: 'High-quality wireless headphones with noise cancellation.',
        category: 'Electronics'
      },
      {
        title: 'Stylish Jacket',
        price: 79,
        image: '/images/jacket.jpg',
        description: 'Modern and comfortable jacket for all seasons.',
        category: 'Fashion'
      },
      {
        title: 'Running Shoes',
        price: 59,
        image: '/images/shoes.jpg',
        description: 'Lightweight running shoes designed for comfort.',
        category: 'Sports'
      }
    ])

    return { result: '✅ Seed data inserted successfully' }
  }
})
