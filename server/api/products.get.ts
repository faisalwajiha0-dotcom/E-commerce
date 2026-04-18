export default defineEventHandler(() => {
  const products = [    {
      id: 1,
      title: 'Wireless Headphones',
      price: 50,
      image: '/images/electronics.jpg',
      category: 'electronics',
      featured: true
    },
    {
      id: 2,
      title: 'T-Shirt',
      price: 20,
      image: '/images/clothing.jpg',
      category: 'clothing',
      featured: true
    },
    {
      id: 3,
      title: 'Shoes',
      price: 80,
      image: '/images/shoes.jpg',
      category: 'shoes',
      featured: true
    },
    {
      id: 4,
      title: 'Watch',
      price: 120,
      image: '/images/accessories.jpg',
      category: 'accessories',
      featured: true
    },

    // 👇 extra products (products page ke liye)
    {
      id: 5,
      title: 'Laptop',
      price: 900,
      image: '/images/electronics.jpg',
      category: 'electronics'
    },
    {
      id: 6,
      title: 'Jacket',
      price: 60,
      image: '/images/clothing.jpg',
      category: 'clothing'
    },
    {
      id: 7,
      title: 'Sneakers',
      price: 100,
      image: '/images/shoes.jpg',
      category: 'shoes'
    },
    {
      id: 8,
      title: 'Sunglasses',
      price: 40,
      image: '/images/accessories.jpg',
      category: 'accessories'
    },
    {
      id: 9,
      title: 'Mobile',
      price: 500,
      image: '/images/electronics.jpg',
      category: 'electronics'
    },
    {
      id: 10,
      title: 'Jeans',
      price: 45,
      image: '/images/clothing.jpg',
      category: 'clothing'
    },
    {
      id: 11,
      title: 'Boots',
      price: 120,
      image: '/images/shoes.jpg',
      category: 'shoes'
    },
    {
      id: 12,
      title: 'Bag',
      price: 70,
      image: '/images/accessories.jpg',
      category: 'accessories'
    }]
  return products
})