import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { auth } from '@/services/auth'
import { AppTitlePage } from './AppTitlePage'

export default async function AppHeader() {
  const session = await auth()

  return (
    <header className="flex items-center justify-between p-4">
      <AppTitlePage />
      <section className="flex flex-row items-center gap-2">
        <h3 className="font-medium">{session?.user?.name}</h3>
        <Avatar>
          <AvatarImage src={session?.user?.image || ''} />
          <AvatarFallback>
            {session?.user?.name?.slice(0, 2).toUpperCase() || 'US'}
          </AvatarFallback>
        </Avatar>
      </section>
    </header>
  )
}
