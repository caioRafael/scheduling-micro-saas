'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { usePatient } from '../_context/usePatient'
import { useEffect } from 'react'
import { Schedule } from '@prisma/client'
import { EmptyState } from '@/components/empty-state'

interface PatientSchedulleCardProps {
  schedules: Schedule[]
}

export function PatientSchedulleCard({ schedules }: PatientSchedulleCardProps) {
  const { setIsSchedulePage } = usePatient()

  useEffect(() => {
    setIsSchedulePage(true)
  }, [])

  if (schedules.length === 0) {
    return <EmptyState message="Não há agendamentos para este paciente" />
  }

  return (
    <div className="flex flex-col gap-4">
      {schedules.map((schedule) => (
        <Card key={schedule.id}>
          <CardHeader>
            <CardTitle>
              {schedule.startTime.toLocaleDateString('pt-BR')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span>09:00 - 12:00</span>
                <Badge>Livre</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>14:00 - 18:00</span>
                <Badge>Livre</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
