import bcrypt from 'bcryptjs'
import { findUserByEmail } from '../../../lib/models/users'
import jwt from 'jsonwebtoken'

export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).end()
  const { email, password } = req.body
  const user = await findUserByEmail(email)
  if (!user) return res.status(401).json({ error: 'invalid credentials' })
  const match = bcrypt.compareSync(password, user.password)
  if (!match) return res.status(401).json({ error: 'invalid credentials' })
  if (!process.env.JWT_SECRET) return res.status(500).json({ error: 'server configuration error' })
  const token = jwt.sign({ sub: user._id.toString(), email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' })
  return res.status(200).json({ ok: true, token })
}
