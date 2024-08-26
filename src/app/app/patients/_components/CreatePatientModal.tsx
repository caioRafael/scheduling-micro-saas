'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useEffect, useRef } from 'react'
import { patientFormSchema } from '../schema'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { createPatient } from '../actions'
import { toast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { MaskInput } from '@/components/MaskInput'
import { MaskEnum } from '@/lib/mask'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import brazilianStates from '@/lib/brasilianStates'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CreatePatientModalProps {
  userId: string
}

export function CreatePatientModal(props: CreatePatientModalProps) {
  const { userId } = props
  const ref = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const form = useForm<z.infer<typeof patientFormSchema>>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      address: '',
      age: 0,
      name: '',
      phone: '',
      birthday: '',
      city: '',
      gender: '',
      state: '',
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

  const { field: birthday } = useController({
    control: form.control,
    name: 'birthday',
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
  }, [zip])

  useEffect(() => {
    const calculateAge = (birthday: string) => {
      const today = new Date()
      const birthDate = new Date(birthday)
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--
      }
      form.setValue('age', age)
    }
    calculateAge(birthday.value)
  }, [birthday])

  const handleSubmit = async (data: z.infer<typeof patientFormSchema>) => {
    const patient = await createPatient(
      { ...data, birthday: new Date(data.birthday) },
      userId,
    )
    router.refresh()
    router.push(`/app/patients/${patient.id}?vision=schedules`)

    ref.current?.click()

    toast({
      title: 'Paciente criado com sucesso',
      description: 'O paciente foi criado com sucesso',
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button ref={ref}>Adicionar paciente</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar paciente</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para criar um novo paciente
          </DialogDescription>
        </DialogHeader>
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
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                          onMaskedChange={(value) =>
                            form.setValue('phone', value)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="birthday"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Data de Nascimento</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
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
                        <Input type="text" {...field} disabled />
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
                        <Input {...field} />
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
                          onMaskedChange={(value) =>
                            form.setValue('zip', value)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="address"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Endereço</FormLabel>
                      <FormControl>
                        <Input {...field} />
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
                      <Popover>
                        <PopoverTrigger asChild className="w-full">
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className="items-start justify-start w-full"
                            >
                              {field.value
                                ? brazilianStates.find(
                                    (uf) => field.value === uf.abbreviation,
                                  )?.abbreviation
                                : 'Estado'}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandList className="overflow-y-scroll">
                              <CommandInput placeholder="Selecione a UF" />
                              <CommandGroup>
                                {brazilianStates.map((uf) => (
                                  <CommandItem
                                    key={uf.abbreviation}
                                    value={uf.abbreviation}
                                    onSelect={() => {
                                      form.setValue('state', uf.abbreviation)
                                    }}
                                  >
                                    {uf.abbreviation} - {uf.name}
                                    <CheckIcon
                                      className={cn(
                                        'ml-auto h-4 w-4',
                                        uf.abbreviation === field.value
                                          ? 'opacity-100'
                                          : 'opacity-0',
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
                <FormField
                  name="city"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Cidade</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="flex justify-end mt-3">
                <Button type="submit">Salvar</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
