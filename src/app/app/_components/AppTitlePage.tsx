'use client'

import { handlePageTitle } from '@/lib/handle-page-title'
import { usePathname } from 'next/navigation'

export function AppTitlePage() {
  const pathname = usePathname()

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-xl font-semibold">{handlePageTitle(pathname)}</h1>
    </section>
  )
}
