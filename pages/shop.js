import Link from 'next/link'

export default function Shop() {
  return (
    <main className="container">
      <header className="py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Shop</h1>
        <Link href="/">Feed</Link>
      </header>
      <p className="text-sm text-gray-600">Product grid — implement GET /api/products and filtering.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Array.from({length:6}).map((_,i)=>(
          <div key={i} className="border rounded p-2">
            <div className="aspect-square bg-gray-100 mb-2" />
            <div className="font-medium">Sample Product {i+1}</div>
            <div className="text-sm text-gray-500">ETB 0.00</div>
          </div>
        ))}
      </div>
    </main>
  )
}
