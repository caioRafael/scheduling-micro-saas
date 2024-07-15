'use server'

import { twilioClient } from '@/services/twilio'

export async function sendMessage() {
  const message = await twilioClient.messages.create({
    body: `Olá, tudo bem?\n Sua sessão será amanhã as 19:00, ok? \n 1 - sim \n 2 - não`,
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+558499292307',
  })

  console.log(message)
}
