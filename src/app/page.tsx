import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <h1>HealthPlaning</h1>
      <Link href="/auth">Login</Link>
      <Link href="/app">Aplicação</Link>
    </main>
  )
}
