import { auth } from '@/services/auth'
import Image from 'next/image'
import { ReactNode } from 'react'
import { ApSidebar } from './_components/ApSidebar'

interface AppLayoutProps {
  children: ReactNode
}

export default async function Layout({ children }: AppLayoutProps) {
  const session = await auth()
  return (
    <div className="grid grid-cols-[300px_1fr] w-screen h-screen">
      <ApSidebar />
      <div className="w-full h-screen">
        <header className="flex items-center justify-between p-4">
          <h1>{session?.user?.name}</h1>
          <Image
            src={session?.user?.image || ''}
            width={30}
            height={30}
            alt="avatar"
          />
        </header>
        <main className="w-full flex items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  )
}
