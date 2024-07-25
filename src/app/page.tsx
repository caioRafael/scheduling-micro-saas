import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center gap-2">
      <h1>HealthPlaning</h1>
      <Link href="/auth" className="p-3 rounded-md bg-primary text-secondary">
        Login
      </Link>
      <Link href="/app" className="p-3 rounded-md bg-primary text-secondary">
        Aplicação
      </Link>
    </main>
  )
}
