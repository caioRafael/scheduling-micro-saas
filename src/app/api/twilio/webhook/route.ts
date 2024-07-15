// import twilioClient from '@/services/twilio'

export async function POST(request: Request) {
  // const client = twilioClient
  const data = await request.json()

  console.log('corpo', data)
  return new Response('ok')
}
