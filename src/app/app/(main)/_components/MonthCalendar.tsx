import { weekDays } from '@/lib/get-week-days'

export function MonthCalendar() {
  // const currentDate = new Date()
  // // const currentMonth = currentDate.getMonth()
  // // const currentYear = currentDate.getFullYear()
  // // const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  // // const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  // // const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  return (
    <div className="grid grid-cols-7 gap-4">
      {weekDays.map((day) => (
        <div
          key={day}
          className="bg-primary rounded-lg p-2 text-primary-foreground font-medium"
        >
          {day}
        </div>
      ))}
    </div>
  )
}
