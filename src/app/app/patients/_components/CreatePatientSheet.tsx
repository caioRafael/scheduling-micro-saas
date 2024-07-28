'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from '@/components/ui/form'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'

import { createPatient } from '../actions'
import { useRouter } from 'next/navigation'
import { patientFormSchema } from '../schema'
import { useEffect, useRef } from 'react'
import { toast } from '@/components/ui/use-toast'
import { MaskInput } from '@/components/MaskInput'
import { MaskEnum } from '@/lib/mask'
import axios from 'axios'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import brazilianStates from '@/lib/brasilianStates'
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CommandGroup } from 'cmdk'

interface CreatePatientSheetProps {
  userId: string
}

export function CreatePatientSheet({ userId }: CreatePatientSheetProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const form = useForm<z.infer<typeof patientFormSchema>>({
    resolver: zodResolver(patientFormSchema),
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
  }, [zip])

  const handleSubmit = async (data: z.infer<typeof patientFormSchema>) => {
    await createPatient({ ...data, birthday: new Date(data.birthday) }, userId)
    router.refresh()

    ref.current?.click()

    toast({
      title: 'Paciente criado com sucesso',
      description: 'O paciente foi criado com sucesso',
    })
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button ref={ref}>Adicionar paciente</Button>
      </SheetTrigger>
      <SheetContent className="h-full overflow-scroll">
        <SheetHeader>
          <SheetTitle>Adicionar paciente</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo para criar um novo paciente
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            className="flex flex-col flex-grow gap-2 w-full"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
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
                    <Input type="number" {...field} />
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
                    <Input type="date" {...field} />
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
            <div className="flex w-full gap-2">
              <FormField
                name="state"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-1/4">
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
                                  onSelect={(currentValue) => {
                                    form.setValue('state', uf.abbreviation)
                                    console.log('olá mundo ', currentValue)
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

            <Button type="submit">Salvar</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
