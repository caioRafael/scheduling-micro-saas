import { transformQueryInJson } from '@/lib/transform-query-in-json'
import { prisma } from '@/services/database'

export async function POST(request: Request) {
  const body = await request.text()
  const jsonBody = transformQueryInJson(body)
  const scheduleByNumber = await prisma.patient.findFirst({
    where: {
      phone: jsonBody.WaId,
    },
    include: {
      Schedule: true,
    },
  })

  if (jsonBody?.Body === '1') {
    await prisma.schedule.update({
      where: {
        id: scheduleByNumber?.Schedule[0].id,
      },
      data: {
        ...scheduleByNumber?.Schedule[0],
        confirmed: true,
      },
    })
    return new Response('Sua sessão foi marcada com sucesso')
  }

  if (jsonBody?.Body === '2') {
    return new Response('Ok, logo será marcado outro horário')
  }

  return new Response('Ok')
}
