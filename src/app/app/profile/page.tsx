import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { auth } from '@/services/auth'
import { Edit } from 'lucide-react'

export default async function ProfilePage() {
  const session = await auth()
  return (
    <div className="bg-background rounded-lg p-6 w-full">
      <div className="flex flex-row w-full py-4 border-b items-center justify-between">
        <div className="flex flex-row gap-2 items-center justify-start">
          <Avatar className="w-20 h-20">
            <AvatarFallback>CR</AvatarFallback>
            <AvatarImage src={session?.user?.image || ''} />
          </Avatar>

          <section>
            <h3>{session?.user?.name}</h3>
            <p>{session?.user?.email}</p>
          </section>
        </div>

        <div className="flex flex-row gap-2 items-center justify-center">
          <Button className="gap-2">
            <Edit /> Editar
          </Button>
        </div>
      </div>
      <div className="p-2">
        <Tabs defaultValue={'information'}>
          <TabsList>
            <TabsTrigger value="information">Informações</TabsTrigger>
            <TabsTrigger value="plans">Planos</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>
          <TabsContent value="information">
            <div>Conteúdo da aba de Informações</div>
          </TabsContent>
          <TabsContent value="plans">
            <div>Conteúdo da aba de Planos</div>
          </TabsContent>
          <TabsContent value="settings">
            <div>Conteúdo da aba de Configurações</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
