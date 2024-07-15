'use server'

import { infobipBaseApi } from '@/services/infobip'

const INFOBIP_SENDER_NUMBER = '447860099299'

export async function sendMessage() {
  await infobipBaseApi.post('whatsapp/1/message/interactive/buttons', {
    from: INFOBIP_SENDER_NUMBER,
    to: '5584999292307',
    content: {
      body: {
        text: 'olá, tudo bem?? vamos confirmar a sessão?',
      },
      action: {
        buttons: [
          {
            type: 'REPLY',
            id: '1',
            title: 'Sim',
          },
          {
            type: 'REPLY',
            id: '2',
            title: 'Não',
          },
        ],
      },
    },
    // notifyUrl:
    //   'https://eb1d-187-19-233-99.ngrok-free.app/api/twilio/webhook/',
  })

  console.log('enviou')
}
