'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { usePatient } from '../_context/usePatient'
import { useEffect } from 'react'
import { Schedule } from '@prisma/client'
import { EmptyState } from '@/components/empty-state'
import { Button } from '@/components/ui/button'
import { sendMessage } from '../actions'

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
          <CardContent className="flex flex-row items-center justify-between">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span>
                  {schedule.startTime.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                  -{' '}
                  {schedule.endTime.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
                <div className="flex items-center justify-between">
                  <Badge variant={schedule.confirmed ? 'default' : 'outline'}>
                    {schedule.confirmed ? 'Confirmado' : 'Pendente'}
                  </Badge>
                </div>
              </div>
              <Button onClick={() => sendMessage()}>Enviar mensagem</Button>
            </div>
            <Button onClick={() => sendMessage()}>enviar mensagem</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
