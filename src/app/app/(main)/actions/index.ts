'use server'

import { prisma } from '@/services/database'

export async function findListSchedules(userId: string) {
  const startOfWeek = new Date()
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
  startOfWeek.setHours(0, 0, 0, 0)

  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(endOfWeek.getDate() + 6)
  endOfWeek.setHours(23, 59, 59, 999)

  const schedules = await prisma.schedule.findMany({
    where: {
      userId,
      startTime: {
        gte: startOfWeek,
        lte: endOfWeek,
      },
    },
    include: {
      patient: true,
    },
  })

  return schedules
}
