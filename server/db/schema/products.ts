import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core'

export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  price: real('price').notNull(),
  category: text('category').notNull(),
  image: text('image').notNull(),
  description: text('description'),
  stock: integer('stock').default(0),
  featured: integer('featured', { mode: 'boolean' }).default(false),
  special: integer('special', { mode: 'boolean' }).default(false)
})