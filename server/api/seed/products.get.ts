import { db } from '~~/server/utils/db'
import { products } from '~~/server/db/schema/products'

export default defineEventHandler(async () => {
  const existing = await db.select().from(products)

  if (existing.length > 0) {
    return { message: 'Products already seeded' }
  }

  await db.insert(products).values([
    {
      title: 'Wireless Headphones',
      price: 99,
      category: 'Electronics',
      image: '/images/headphone.jpg',
      description: 'High-quality wireless headphones',
      stock: 50,
      featured: true
    },
    {
      title: 'Stylish Jacket',
      price: 79,
      category: 'Clothing',
      image: '/images/jacket.jpg',
      description: 'Comfortable and modern jacket',
      stock: 50
    },
    {
      title: 'Running Shoes',
      price: 120,
      category: 'Shoes',
      image: '/images/shoe.jpg',
      description: 'Lightweight running shoes',
      stock: 50
    },
    {
      title: 'Luxury Watch',
      price: 150,
      category: 'Accessories',
      image: '/images/watch.jpg',
      description: 'Elegant luxury watch',
      stock: 50
    },
    {
      title: 'Smartphone',
      price: 500,
      category: 'Electronics',
      image: '/images/smartphone.jpg',
      description: 'Latest smartphone with advanced features',
      stock: 50,
      featured: true,
      special: true
    },
    {
      title: 'Denim Jeans',
      price: 60,
      category: 'Clothing',
      image: '/images/jeans.jpg',
      description: 'Stylish denim jeans',
      stock: 50
    },
    {
      title: 'Sneakers',
      price: 110,
      category: 'Shoes',
      image: '/images/sneakers.jpg',
      description: 'Trendy everyday sneakers',
      stock: 50
    },
    {
      title: 'Handbag',
      price: 130,
      category: 'Accessories',
      image: '/images/handbag.jpg',
      description: 'Premium quality handbag',
      stock: 50,
      special: true
    },
    {
      title: 'Bluetooth Speaker',
      price: 80,
      category: 'Electronics',
      image: '/images/speaker.jpg',
      description: 'Portable Bluetooth speaker',
      stock: 50
    },
    {
      title: 'Formal Shirt',
      price: 55,
      category: 'Clothing',
      image: '/images/shirt.jpg',
      description: 'Perfect formal shirt',
      stock: 50
    },
    {
      title: 'Leather Boots',
      price: 140,
      category: 'Shoes',
      image: '/images/boots.jpg',
      description: 'Premium leather boots',
      stock: 50
    },
    {
      title: 'Sunglasses',
      price: 70,
      category: 'Accessories',
      image: '/images/sunglasses.jpg',
      description: 'Stylish UV-protected sunglasses',
      stock: 50,
      featured: true
    }
  ])

  return {
    success: true,
    message: '✅ Products seeded successfully'
  }
})