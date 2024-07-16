'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Calendar } from 'lucide-react'
import { useSchedule } from '../_context/useSchedule'
import {
  ScheduleVisionEnum,
  VisionTypeRecord,
} from '@/interface/enuns/schdule-vision'
import { DatePicker } from '@/components/calendar/DatePicker'

export function FilterContainer() {
  const { date, vision, setVision } = useSchedule()

  const menuOptions = [
    {
      key: ScheduleVisionEnum.DAY,
      text: 'Dia',
      onClick: () => setVision(ScheduleVisionEnum.DAY),
    },
    {
      key: ScheduleVisionEnum.WEEK,
      text: 'Semana',
      onClick: () => setVision(ScheduleVisionEnum.WEEK),
    },
    {
      key: ScheduleVisionEnum.MONTH,
      text: 'Mês',
      onClick: () => setVision(ScheduleVisionEnum.MONTH),
    },
  ]

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        {/* <h2 className="text-2xl font-bold">
          {date.toLocaleDateString('pt-BR', {
            month: 'long',
            year: 'numeric',
          })}
        </h2> */}
        <DatePicker />
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex gap-2">
              <Calendar className="w-5 h-5" />
              <h1>visão do {VisionTypeRecord[vision]}</h1>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menuOptions.map((option) => (
              <DropdownMenuItem key={option.key} onClick={option.onClick}>
                {option.text}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
