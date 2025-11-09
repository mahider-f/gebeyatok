/**
 * Simple MongoDB connection helper using native driver.
 */
import { MongoClient } from 'mongodb'

let cachedClient = null
let cachedDb = null

export async function connectToDatabase(uri) {
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb }
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect()
  const db = client.db()
  cachedClient = client
  cachedDb = db
  return { client, db }
}
