import { listProducts } from '../../../lib/models/products'
export default async function handler(req,res){
  const items = await listProducts()
  res.status(200).json({ ok: true, items })
}
