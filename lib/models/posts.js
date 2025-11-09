import { connectToDatabase } from '../db'
const COLLECTION = 'posts'

export async function createPost(post) {
  const { db } = await connectToDatabase(process.env.MONGODB_URI)
  post.createdAt = new Date()
  await db.collection(COLLECTION).insertOne(post)
}

export async function feed({ limit = 20 }) {
  const { db } = await connectToDatabase(process.env.MONGODB_URI)
  // simplified: sort by createdAt; replace with engagement sort later
  return db.collection(COLLECTION).find({}).sort({ createdAt: -1 }).limit(limit).toArray()
}
