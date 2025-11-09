import Link from 'next/link'

export default function Login() {
  return (
    <main className="container max-w-md">
      <h2 className="text-xl font-semibold py-4">Login</h2>
      <form method="post" action="/api/auth/login" className="space-y-4">
        <input name="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button className="w-full p-2 bg-black text-white rounded">Login</button>
      </form>
      <p className="mt-4">No account? <Link href="/auth/register">Register</Link></p>
    </main>
  )
}
