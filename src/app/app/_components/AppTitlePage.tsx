'use client'

import { usePathname } from 'next/navigation'

export function AppTitlePage() {
  const pathname = usePathname()

  const pageTitle = pathname.split('/').pop()

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-xl font-semibold">
        {AppTitleObject[pageTitle as keyof typeof AppTitleObject].title}
      </h1>
    </section>
  )
}

const AppTitleObject = {
  app: {
    title: 'Inicio',
  },
  patients: {
    title: 'Pacientes',
  },
  profile: {
    title: 'Perfil',
  },
}
