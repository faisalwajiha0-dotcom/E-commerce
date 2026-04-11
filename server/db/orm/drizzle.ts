import { useDrizzle } from '#hub/server'

// Helper function to access the database
export const getDB = () => {
  return useDrizzle()
}
