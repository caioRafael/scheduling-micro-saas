import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { auth } from '@/services/auth'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { findListSchedules } from './actions'
import { WeekCalendar } from './_components/WeekCalendar'

export default async function Home() {
  const session = await auth()
  const schedules = await findListSchedules(session?.user?.id || '')
  return (
    <div className="bg-background rounded-lg p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-2xl font-bold">
            {new Date().toLocaleDateString('pt-BR', {
              month: 'long',
              year: 'numeric',
            })}
          </h2>
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
          <WeekCalendar schedules={schedules} />
        </div>
      </div>
    </div>
  )
}
