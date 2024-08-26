'use client'

import { Button } from '@/components/ui/button'
import { usePatient } from '../_context/usePatient'
import { PatientCreateScheduleModal } from './PatientCreateScheduleModal'
import { Edit } from 'lucide-react'

export function PatientPageHeader() {
  const { setEdit, isSchedulePage } = usePatient()

  return (
    <div className="flex justify-end gap-2">
      <Button variant="outline" className="gap-2" onClick={() => setEdit(true)}>
        <Edit /> Editar
      </Button>
      {isSchedulePage && <PatientCreateScheduleModal />}
    </div>
  )
}
