import { z } from 'zod'

export const tagFormSchema = z.object({
  title: z.string().min(1, 'Informe o titulo'),
  description: z.string().optional(),
  color: z.string().min(7, 'Selecione uma cor'),
})
