/**
 * Release remaining payment to supplier (escrow release).
 * Implement server-side logic:
 *  - Verify delivery confirmation
 *  - Call Chapa or payment provider to release remaining funds
 *  - Update order.status -> 'completed'
 */
export default async function handler(req,res){
  res.status(501).json({ error: 'not implemented' })
}
