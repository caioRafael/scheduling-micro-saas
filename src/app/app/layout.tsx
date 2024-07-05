import { ReactNode } from 'react'
import { ApSidebar } from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'

interface AppLayoutProps {
  children: ReactNode
}

export default async function Layout({ children }: AppLayoutProps) {
  return (
    <div className="grid grid-cols-[300px_1fr] w-screen h-screen">
      <ApSidebar />
      <div className="w-full h-screen p-4">
        <AppHeader />
        <main className="w-full flex items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  )
}
