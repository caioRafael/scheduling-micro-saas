'use server'

import { twilioClient } from '@/services/twilio'

export async function sendMessage() {
  await twilioClient.messages.create({
    body: `Olá, tudo bem?\n Sua sessão será amanhã as 19:00, ok? \n 1 - sim \n 2 - não`,
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+558499292307',
    // to: 'whatsapp:+5584999932376',
  })
}
