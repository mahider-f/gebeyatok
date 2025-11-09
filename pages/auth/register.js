import Link from 'next/link'

export default function Register() {
  return (
    <main className="container max-w-md">
      <h2 className="text-xl font-semibold py-4">Register</h2>
      <form method="post" action="/api/auth/register" className="space-y-4">
        <input name="username" placeholder="Username" className="w-full p-2 border rounded" />
        <input name="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button className="w-full p-2 bg-black text-white rounded">Create account</button>
      </form>
      <p className="mt-4">Already registered? <Link href="/auth/login">Login</Link></p>
    </main>
  )
}
