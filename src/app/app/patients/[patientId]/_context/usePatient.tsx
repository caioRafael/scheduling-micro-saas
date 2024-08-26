'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Patient } from '@/interface/patients'

interface PatientContextProps {
  patient: Patient | null
  setPatient: (patient: Patient) => void
  userId: string
  isEdit: boolean
  setEdit: (value: boolean) => void
  isSchedulePage: boolean
  setIsSchedulePage: (value: boolean) => void
  hasSchedule: boolean
}

const PatientContext = createContext<PatientContextProps | undefined>(undefined)

export const PatientProvider = ({
  children,
  initialData,
  userId,
  hasSchedule,
}: {
  children: ReactNode
  initialData: Patient
  userId: string
  hasSchedule: boolean
}) => {
  const [patient, setPatient] = useState<Patient | null>(initialData)
  const [isEdit, setEdit] = useState(false)
  const [isSchedulePage, setIsSchedulePage] = useState(false)

  return (
    <PatientContext.Provider
      value={{
        patient,
        setPatient,
        userId,
        isEdit,
        setEdit,
        isSchedulePage,
        setIsSchedulePage,
        hasSchedule,
      }}
    >
      {children}
    </PatientContext.Provider>
  )
}

export const usePatient = (): PatientContextProps => {
  const context = useContext(PatientContext)
  if (!context) {
    throw new Error('usePatient must be used within a PatientProvider')
  }
  return context
}
