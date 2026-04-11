import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// ✅ Products Table
export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  price: integer('price').notNull(),
  image: text('image').notNull(),
  description: text('description'),
  category: text('category')
})
