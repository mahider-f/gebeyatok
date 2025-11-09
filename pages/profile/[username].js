import { useRouter } from 'next/router'

export default function Profile() {
  const router = useRouter()
  const { username } = router.query
  return (
    <main className="container">
      <div className="flex items-center gap-4 py-6">
        <div className="w-20 h-20 bg-gray-200 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{username ?? 'user'}</h2>
          <div className="text-sm text-gray-600">Business name • Verified badge placeholder</div>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-2">
        {Array.from({length:9}).map((_,i)=>(
          <div key={i} className="aspect-square bg-gray-100" />
        ))}
      </section>
    </main>
  )
}
