import { z } from 'zod'

export const patientFormSchema = z.object({
  name: z.string().min(3, 'Nome é obrigatório'),
  phone: z
    .string()
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido')
    .refine(
      (val) => val.length === 14 || val.length === 15,
      'Telefone inválido',
    ),
  age: z
    .string()
    .refine((val) => !isNaN(Number(val)), 'Idade inválida')
    .transform((val) => Number(val))
    .refine((val) => val >= 0, 'Idade inválida'),
  birthday: z.string().min(1, 'Data de nascimento inválida'),
  gender: z.string().min(1, 'Gênero é obrigatório'),
  address: z.string().min(1, 'Endereço é obrigatório'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  state: z.string().min(1, 'Estado é obrigatório'),
  zip: z.string().min(1, 'CEP é obrigatório'),
})

export const ScheduleFormSchema = z.object({
  startTime: z.string().min(1, 'Horário de início é obrigatório'),
  endTime: z.string().min(1, 'Horário de fim é obrigatório'),
})
