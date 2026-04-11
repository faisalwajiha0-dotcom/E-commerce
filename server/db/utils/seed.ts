import { defineTask } from '#hub'
import { useDrizzle } from '#hub/server'
import { products } from '../schema'

export default defineTask({
  meta: {
    name: 'seed',
    description: 'Seed database with initial products'
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
        description: 'Modern and comfortable jacket.',
        category: 'Clothing'
      },
      {
        title: 'Running Shoes',
        price: 59,
        image: '/images/shoes.jpg',
        description: 'Lightweight and durable running shoes.',
        category: 'Shoes'
      },
      {
        title: 'Leather Watch',
        price: 120,
        image: '/images/watch.jpg',
        description: 'Elegant leather strap watch.',
        category: 'Accessories'
      }
    ])

    return { result: 'Database seeded successfully' }
  }
})
