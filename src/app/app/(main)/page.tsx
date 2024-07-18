import { auth } from '@/services/auth'
import { findListSchedules } from './actions'
import { ScheduleProvider } from './_context/useSchedule'
import { FilterContainer } from './_components/FilterContainer'
import { VisionsContainer } from './_components/VisionsContainer'

export default async function Home() {
  const session = await auth()
  const schedules = await findListSchedules(session?.user?.id || '')
  return (
    <div className="bg-background rounded-lg p-6 w-full">
      <ScheduleProvider schedules={schedules}>
        <FilterContainer />
        <VisionsContainer />
      </ScheduleProvider>
    </div>
  )
}
