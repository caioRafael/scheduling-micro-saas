'use client'
import { ScheduleVisionEnum } from '@/interface/enuns/schdule-vision'
import { Schedule } from '@/interface/schedule'
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'

interface ScheduleContextData {
  vision: ScheduleVisionEnum
  setVision: (value: ScheduleVisionEnum) => void
  date: Date
  setDate: (date: Date) => void
  schedules: Schedule[]
}

interface ScheduleProviderProps {
  children: ReactNode
  schedules: Schedule[]
}

const ScheduleContext = createContext<ScheduleContextData | undefined>(
  undefined,
)

export const ScheduleProvider = ({
  children,
  schedules,
}: ScheduleProviderProps) => {
  const [vision, setVision] = useState<ScheduleVisionEnum>(
    ScheduleVisionEnum.WEEK,
  )
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    const storedVision = localStorage.getItem('scheduleVision')
    if (storedVision) {
      setVision(storedVision as ScheduleVisionEnum)
    }
  }, [])

  const setVisionLocalStorage = (value: ScheduleVisionEnum) => {
    setVision(value)
    localStorage.setItem('scheduleVision', value)
  }

  return (
    <ScheduleContext.Provider
      value={{
        vision,
        setVision: setVisionLocalStorage,
        date,
        setDate,
        schedules,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}

export const useSchedule = () => {
  const context = useContext(ScheduleContext)
  if (!context) {
    throw new Error('useSchedule must be used within a ScheduleProvider')
  }
  return context
}
