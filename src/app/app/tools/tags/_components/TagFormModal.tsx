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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { tagFormSchema } from '../schema'
import { Input } from '@/components/ui/input'
import { useRef } from 'react'
import { CreateTag } from '../actions'
import { useRouter } from 'next/navigation'

interface TagFormModalProps {
  userId: string
}

export function TagFormModal({ userId }: TagFormModalProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const tagForm = useForm<z.infer<typeof tagFormSchema>>({
    resolver: zodResolver(tagFormSchema),
  })

  const createTag = async (data: z.infer<typeof tagFormSchema>) => {
    console.log(data)

    await CreateTag({
      ...data,
      userId,
    })

    router.refresh()
    ref.current?.click()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button ref={ref}>Nova Tag</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar nova tag</DialogTitle>
          <DialogDescription>
            As tags são ferramentas para afrupar e facilitar a busca por seus
            pacientes
          </DialogDescription>
        </DialogHeader>
        <Form {...tagForm}>
          <form
            onSubmit={tagForm.handleSubmit(createTag)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={tagForm.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Titulo *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={tagForm.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={tagForm.control}
              name="color"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Cor *</FormLabel>
                  <FormControl>
                    <Input {...field} type="color" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex flex-row justify-end">
              <Button type="submit">Criar</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
