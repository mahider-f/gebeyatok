import Link from 'next/link'
export default function Header(){
  return (
    <header className="py-4 flex items-center justify-between">
      <div className="text-xl font-bold">Gebeya Tok</div>
      <nav className="space-x-4">
        <Link href="/">Feed</Link>
        <Link href="/shop">Shop</Link>
      </nav>
    </header>
  )
}
