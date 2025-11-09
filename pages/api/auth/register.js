import bcrypt from 'bcryptjs'
import { createUser, findUserByEmail } from '../../../lib/models/users'

export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).end()
  const { username, email, password } = req.body
  if (!email || !password || !username) return res.status(400).json({ error: 'missing fields' })
  const existing = await findUserByEmail(email)
  if (existing) return res.status(409).json({ error: 'email in use' })
  const salt = bcrypt.genSaltSync(10)
  const passwordHash = bcrypt.hashSync(password, salt)
  const id = await createUser({ username, email, passwordHash })
  return res.status(201).json({ ok: true, id })
}
