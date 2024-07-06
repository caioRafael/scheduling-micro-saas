export default function MonthCalendar() {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">
          {daysOfWeek[new Date(currentYear, currentMonth, 1).getDay()]},{' '}
          {currentMonth + 1}/{currentYear}
        </h2>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="text-center text-muted-foreground font-medium"
          >
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }, (_, i) => i).map(
          (_, index) => (
            <div key={index} className="text-center text-muted-foreground">
              {' '}
            </div>
          ),
        )}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
          (day, index) => (
            <div
              key={index}
              className={`text-center rounded-md transition-colors hover:bg-muted hover:text-foreground ${
                index + firstDayOfMonth === new Date().getDate() &&
                currentMonth === new Date().getMonth() &&
                currentYear === new Date().getFullYear()
                  ? 'bg-primary text-primary-foreground'
                  : ''
              }`}
            >
              {day}
            </div>
          ),
        )}
      </div>
    </div>
  )
}
