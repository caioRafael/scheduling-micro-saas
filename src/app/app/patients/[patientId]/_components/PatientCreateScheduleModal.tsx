'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CalendarPlus } from 'lucide-react'
import { z } from 'zod'
import { ScheduleFormSchema } from '../../schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useEffect, useRef, useState } from 'react'
import { createSchedule } from '../../actions'
import { usePatient } from '../_context/usePatient'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog'

export function PatientCreateScheduleModal() {
  const ref = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const { patient, userId, hasSchedule } = usePatient()
  const [open, setOpen] = useState<boolean>(false)
  const form = useForm<z.infer<typeof ScheduleFormSchema>>({
    resolver: zodResolver(ScheduleFormSchema),
  })

  useEffect(() => {
    if (!hasSchedule) {
      // ref.current?.click()
      setOpen(true)
    }
  }, [])

  const handleSubmit = async (data: z.infer<typeof ScheduleFormSchema>) => {
    await createSchedule({
      ...data,
      startTime: new Date(data.startTime),
      endTime: new Date(data.endTime),
      patientId: patient?.id as string,
      userId,
    })

    router.refresh()

    ref.current?.click()

    toast({
      title: 'Consulta agendada com sucesso',
      description: 'A consulta foi agendada com sucesso',
    })
  }
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button ref={ref} className="gap-2">
          <CalendarPlus /> Adicionar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agendar consulta</DialogTitle>
          <DialogDescription>
            Selecione o dia e horário para agendar uma consulta.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Horário de início</FormLabel>
                  <FormControl>
                    <Input {...field} type="datetime-local" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Horário de fim</FormLabel>
                  <FormControl>
                    <Input {...field} type="datetime-local" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Agendar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
