import { db } from './index'
import { products } from './schema'

export async function seed() {
  await db.insert(products).values([
    {
      title: 'Wireless Headphones',
      price: 99,
      image: '/images/headphone.jpg'
    },
    {
      title: 'Stylish Jacket',
      price: 79,
      image: '/images/jacket.jpg'
    },
    {
      title: 'Running Shoes',
      price: 120,
      image: '/images/shoe.jpg'
    },
    {
      title: 'Luxury Watch',
      price: 150,
      image: '/images/watch.jpg'
    }
  ])
}
