import Link from 'next/link'

export default function Feed() {
  return (
    <main className="container">
      <header className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-semibold">Gebeya Tok — Feed</h1>
        <nav className="space-x-4">
          <Link href='/shop'>Shop</Link>
          <Link href='/auth/login'>Login</Link>
        </nav>
      </header>

      <section>
        <p className="text-sm text-gray-600">This is a scaffold feed page. Implement feed fetching from <code>/api/posts/feed</code>.</p>
      </section>

      <section className="mt-6 grid grid-cols-3 gap-2">
        {/* Example square placeholders like Instagram grid */}
        {Array.from({length:9}).map((_,i)=>(
          <div key={i} className="aspect-square bg-gray-100 rounded-md" />
        ))}
      </section>
    </main>
  )
}
