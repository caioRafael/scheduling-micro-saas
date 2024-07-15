// import twilioClient from '@/services/twilio'

import { transformQueryInJson } from '@/lib/transform-query-in-json'

export async function POST(request: Request) {
  // const client = twilioClient
  const body = await request.text()
  const jsonBody = transformQueryInJson(body)

  if (jsonBody?.Body === '1') {
    return new Response('Sua sessão foi marcada com sucesso')
  }

  if (jsonBody?.Body === '2') {
    return new Response('Ok, logo será marcado outro horário')
  }

  console.log(jsonBody)
}
