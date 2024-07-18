import { Schedule } from '@/interface/schedule'

interface WeekDay {
  date: Date
  name: string
}

export const weekDays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
]

export function getWeekDates(referencyDay?: Date): WeekDay[] {
  const now = referencyDay ?? new Date()
  const dayOfWeek = now.getDay()
  const startOfWeek = new Date(now)
  startOfWeek.setDate(now.getDate() - dayOfWeek)

  const weekDates: WeekDay[] = []
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + i)
    weekDates.push({ date, name: weekDays[i] })
  }
  return weekDates
}

export function filterDatesBySameDay(
  initialDate: Date,
  schedules: Schedule[],
): Schedule[] {
  return schedules.filter((schedule) => {
    const date = new Date(schedule.startTime)
    return (
      date.getDate() === initialDate.getDate() &&
      date.getMonth() === initialDate.getMonth() &&
      date.getFullYear() === initialDate.getFullYear()
    )
  })
}

export function getWeekDayName(date: Date): string {
  return weekDays[date.getDay()]
}
