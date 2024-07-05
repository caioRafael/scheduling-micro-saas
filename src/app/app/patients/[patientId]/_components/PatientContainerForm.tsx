'use client'

import { useForm } from 'react-hook-form'
import { usePatient } from '../_context/usePatient'
import { patientFormSchema } from '../../schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { updatePatient } from '../../actions'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function PatientContainerForm() {
  const { patient, isEdit, userId, setEdit, setIsSchedulePage } = usePatient()
  const route = useRouter()
  const form = useForm<z.infer<typeof patientFormSchema>>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      address: patient?.address,
      age: patient?.age,
      name: patient?.name,
      phone: patient?.phone,
      birthday: patient?.birthday.toISOString().split('T')[0],
      city: patient?.city,
      gender: patient?.gender,
      state: patient?.state,
    },
  })

  useEffect(() => {
    setIsSchedulePage(false)
  }, [])

  const handleSubmit = async (data: z.infer<typeof patientFormSchema>) => {
    console.log(data)
    if (userId !== patient?.userId) {
      toast({
        title: 'Acesso negado',
        description: 'Você não tem permissão para editar este paciente',
        variant: 'destructive',
      })
    }

    const updatedPatient = await updatePatient(patient?.id as string, {
      ...data,
      birthday: new Date(data.birthday),
    })

    if (updatedPatient) {
      setEdit(false)
      toast({
        title: 'Paciente atualizado',
        description: 'O paciente foi atualizado com sucesso',
      })
      route.refresh()
    }
  }

  return (
    <div className="flex flex-col w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} disabled={!isEdit} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 w-full gap-2">
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!isEdit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              name="age"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Idade</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} disabled={!isEdit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              name="birthday"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Data de Nascimento</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} disabled={!isEdit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              name="gender"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Gênero</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!isEdit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              name="address"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!isEdit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              name="city"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!isEdit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              name="state"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!isEdit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              name="zip"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!isEdit} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          {isEdit && (
            <div className="flex justify-end mt-3">
              <Button type="submit">Atualizar</Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  )
}
