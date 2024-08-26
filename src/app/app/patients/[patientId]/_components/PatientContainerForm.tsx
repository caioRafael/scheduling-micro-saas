'use client'

import { useController, useForm } from 'react-hook-form'
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
import { MaskInput } from '@/components/MaskInput'
import { MaskEnum } from '@/lib/mask'
import axios from 'axios'
import { Combobox, IComboboxOption } from '@/components/combobox'
import { Tag } from '@/interface/tag'

interface PatientContainerFormProps {
  tagList?: Tag[]
}

export function PatientContainerForm({ tagList }: PatientContainerFormProps) {
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
      patientTagId: patient?.patientTagId || '',
    },
  })

  const { field: zip } = useController({
    control: form.control,
    name: 'zip',
    defaultValue: '',
  })

  const { field: phone } = useController({
    control: form.control,
    name: 'phone',
    defaultValue: '',
  })

  useEffect(() => {
    if (zip.value.length === 9) {
      axios
        .get(`https://brasilapi.com.br/api/cep/v2/${zip.value}`)
        .then((res) => {
          form.setValue('state', res.data.state)
          form.setValue('city', res.data.city)
        })
        .catch((error) => console.log(error))
    }
    // eslint-disable-next-line
  }, [zip])

  useEffect(() => {
    setIsSchedulePage(false)
    // eslint-disable-next-line
  }, [])

  const handleSubmit = async (data: z.infer<typeof patientFormSchema>) => {
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

  const tagOptionList: IComboboxOption[] =
    tagList?.map((value) => {
      return {
        key: value.id as string,
        value: value.id as string,
        text: value.title,
        viewOption: () => (
          <div className="w-full flex flex-row gap-2">
            <div className="w-3 h-3" style={{ background: value.color }} />
            {value.title}
          </div>
        ),
      }
    }) || []

  const onViewTag = (tagId: string | number) => {
    const tag = tagList?.find((tag) => tag.id === tagId)

    return (
      <div className="w-full flex flex-row gap-2 items-center justify-center">
        <div className="w-3 h-3" style={{ background: tag?.color || '' }} />
        {tag?.title || ''}
      </div>
    )
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
          {tagList && (
            <FormField
              control={form.control}
              name="patientTagId"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col">
                  <FormLabel>Tag</FormLabel>
                  <FormControl>
                    <Combobox
                      placeholder="Selecione uma tag"
                      options={tagOptionList}
                      selected={field.value as string}
                      setSelected={(value) =>
                        form.setValue('patientTagId', value as string)
                      }
                      viewSelected={onViewTag}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          )}
          <div className="grid grid-cols-2 w-full gap-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Telefone(Whatsapp) *</FormLabel>
                  <FormControl>
                    <MaskInput
                      placeholder="Digite o telefone"
                      {...field}
                      typeMask={MaskEnum.PHONE}
                      type="text"
                      maxLength={15}
                      value={phone.value}
                      onMaskedChange={(value) => form.setValue('phone', value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>CEP *</FormLabel>
                  <FormControl>
                    <MaskInput
                      placeholder="CEP"
                      {...field}
                      typeMask={MaskEnum.CEP}
                      type="text"
                      maxLength={9}
                      value={zip.value}
                      onMaskedChange={(value) => form.setValue('zip', value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
