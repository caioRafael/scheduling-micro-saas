import { Schedule } from '@/interface/schedule'
import { filterDatesBySameDay, getWeekDates } from '@/lib/get-week-days'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface WeekCalendarProps {
  date?: Date
  schedules: Schedule[]
}

export function WeekCalendar({ date, schedules }: WeekCalendarProps) {
  const weekDates = getWeekDates(date)
  return (
    <div className="grid grid-cols-7 gap-4">
      {weekDates.map((day) => (
        <div className="space-y-2" key={day.date.toISOString()}>
          <div className="bg-primary rounded-lg p-2 text-primary-foreground font-medium">
            {day.name} <br /> {day.date.toLocaleDateString('pt-BR')}
          </div>
          {filterDatesBySameDay(day.date, schedules).map((schedule) => (
            <div
              key={schedule.id}
              className={`flex flex-row items-center justify-between rounded-lg p-2 ${schedule.confirmed ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
            >
              <div className="text-sm">
                <p>
                  {schedule.startTime.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                  -{' '}
                  {schedule.endTime.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
                <p>{schedule.patient?.name}</p>
              </div>

              <Link href={`app/patients/${schedule.patientId}`}>
                <ChevronRight />
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
