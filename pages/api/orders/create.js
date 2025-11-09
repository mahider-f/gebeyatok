/**
 * Create order and initialize Chapa earnest payment.
 * This is a stub. Implement Chapa server-side integration here.
 *
 * Expected body:
 * { buyerId, supplierId, products: [{productId, quantity, price}], totalAmount }
 *
 * Server must:
 *  - Create order in DB with status 'earnestPaid' after Chapa success
 *  - Take platformFee (2%) and store payment metadata
 *  - Return Chapa checkout/payment URL or confirmation
 */
export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).end()
  // TODO: implement Chapa API calls here with server-side key
  res.status(501).json({ error: 'not implemented', note: 'Implement Chapa payment flow server-side' })
}
