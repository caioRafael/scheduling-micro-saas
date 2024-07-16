import { auth } from '@/services/auth'
import { findListSchedules } from './actions'
import { WeekCalendar } from './_components/WeekCalendar'
import { ScheduleProvider } from './_context/useSchedule'
import { FilterContainer } from './_components/FilterContainer'

export default async function Home() {
  const session = await auth()
  const schedules = await findListSchedules(session?.user?.id || '')
  return (
    <div className="bg-background rounded-lg p-6 w-full">
      <ScheduleProvider schedules={schedules}>
        <FilterContainer />
        <div className="grid grid-cols-1 gap-4 mt-6">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Visão Semanal</h3>
            </div>
            <WeekCalendar schedules={schedules} />
            {/* <DayCalendar /> */}
          </div>
        </div>
      </ScheduleProvider>
    </div>
  )
}
