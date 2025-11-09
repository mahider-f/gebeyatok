import { createPost } from '../../../lib/models/posts'
export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).end()
  // expected body: { userId, mediaUrl, caption }
  await createPost(req.body)
  res.status(201).json({ ok: true })
}
