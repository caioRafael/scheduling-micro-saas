import { auth } from "@/services/auth";
import { SignOutButton } from "./_components/SignOutButton";

export default async function Home() {
  const session = await auth()


  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">ola mundo</h1>
        <img src={session?.user?.image || ''} alt="user" className="w-10 h-10 rounded-full" />
        <p className="text-2xl">{session?.user?.email}</p>
      </div>
      <SignOutButton/>
    </main>
  )
}