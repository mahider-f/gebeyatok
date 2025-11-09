import { connectToDatabase } from '../db'
const COLLECTION = 'products'

export async function listProducts({ limit = 50 } = {}) {
  const { db } = await connectToDatabase(process.env.MONGODB_URI)
  return db.collection(COLLECTION).find({}).limit(limit).toArray()
}
