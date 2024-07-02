import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

export default async function Home() {
  return (
    <div className="bg-background rounded-lg p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-2xl font-bold">Junho 2024</h2>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Calendar className="w-5 h-5" />
                <span className="sr-only">Change view</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Dia</DropdownMenuItem>
              <DropdownMenuItem>Semana</DropdownMenuItem>
              <DropdownMenuItem>Mês</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-6">
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Visão Semanal</h3>
          </div>
          <div className="grid grid-cols-7 gap-4">
            <div className="space-y-2">
              <div className="bg-primary rounded-lg p-2 text-primary-foreground font-medium">
                Segunda
              </div>
              <div className="bg-primary rounded-lg p-2 text-primary-foreground">
                <div className="text-sm">9:00 - 10:30</div>
              </div>
              <div className="bg-muted rounded-lg p-2 text-muted-foreground">
                <div className="text-sm">11:00 - 12:00</div>
              </div>
              <div className="bg-primary rounded-lg p-2 text-primary-foreground">
                <div className="text-sm">14:00 - 15:30</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-primary rounded-lg p-2 text-primary-foreground font-medium">
                Terça
              </div>
              <div className="bg-primary rounded-lg p-2 text-primary-foreground">
                <div className="text-sm">14:00 - 15:30</div>
              </div>
              <div className="bg-muted rounded-lg p-2 text-muted-foreground">
                <div className="text-sm">16:00 - 17:00</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-primary rounded-lg p-2 text-primary-foreground font-medium">
                Quarta
              </div>
              <div className="bg-muted rounded-lg p-2 text-muted-foreground">
                <div className="text-sm">Livre</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-primary rounded-lg p-2 text-primary-foreground font-medium">
                Quinta
              </div>
              <div className="bg-primary rounded-lg p-2 text-primary-foreground">
                <div className="text-sm">11:00 - 12:30</div>
              </div>
              <div className="bg-muted rounded-lg p-2 text-muted-foreground">
                <div className="text-sm">14:00 - 15:00</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-muted rounded-lg p-2 text-muted-foreground font-medium">
                Sexta
              </div>
              <div className="bg-muted rounded-lg p-2 text-muted-foreground">
                <div className="text-sm">Livre</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-muted rounded-lg p-2 text-muted-foreground font-medium">
                Sábado
              </div>
              <div className="bg-muted rounded-lg p-2 text-muted-foreground">
                <div className="text-sm">Livre</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-muted rounded-lg p-2 text-muted-foreground font-medium">
                Domingo
              </div>
              <div className="bg-muted rounded-lg p-2 text-muted-foreground">
                <div className="text-sm">Livre</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
