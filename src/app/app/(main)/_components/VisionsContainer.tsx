'use client'

import { ScheduleVisionEnum } from '@/interface/enuns/schdule-vision'
import { useSchedule } from '../_context/useSchedule'
import { WeekCalendar } from './WeekCalendar'
import { DayCalendar } from './DayCalendar'
// import { MonthCalendar } from './MonthCalendar'

export function VisionsContainer() {
  const { schedules, vision, date } = useSchedule()
  return (
    <div className="bg-muted rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">{textTypeVision[vision]}</h3>
      </div>
      {vision === ScheduleVisionEnum.DAY ? (
        <DayCalendar date={date} schedules={schedules} />
      ) : vision === ScheduleVisionEnum.WEEK ? (
        <WeekCalendar date={date} schedules={schedules} />
      ) : (
        // <MonthCalendar />
        <></>
      )}
    </div>
  )
}

const textTypeVision = {
  [ScheduleVisionEnum.DAY]: 'Visão diaria',
  [ScheduleVisionEnum.WEEK]: 'Visão semanal',
  [ScheduleVisionEnum.MONTH]: 'Visão mensal',
}
