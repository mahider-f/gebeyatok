/**
 * Users collection helper functions
 * (Not a Mongoose schema; use MongoDB native driver)
 */
import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../db'

const COLLECTION = 'users'

export async function findUserByEmail(email) {
  const { db } = await connectToDatabase(process.env.MONGODB_URI)
  return db.collection(COLLECTION).findOne({ email })
}

export async function createUser(data) {
  const { db } = await connectToDatabase(process.env.MONGODB_URI)
  const now = new Date()
  const doc = {
    username: data.username,
    email: data.email,
    password: data.passwordHash,
    profilePic: data.profilePic || null,
    role: 'user',
    businessName: data.businessName || null,
    description: data.description || null,
    verified: false,
    createdAt: now,
    updatedAt: now
  }
  const res = await db.collection(COLLECTION).insertOne(doc)
  return res.insertedId
}
