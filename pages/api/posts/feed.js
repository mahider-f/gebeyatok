import { feed } from '../../../lib/models/posts'
export default async function handler(req,res){
  const items = await feed({ limit: 30 })
  res.status(200).json({ ok: true, items })
}
