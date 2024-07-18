'use server'

import { prisma } from '@/services/database'

export async function findListSchedules(userId: string) {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const startOfMonth = new Date(currentYear, currentMonth, 1)
  startOfMonth.setHours(0, 0, 0, 0)

  const endOfMonth = new Date(currentYear, currentMonth + 1, 0)
  endOfMonth.setHours(23, 59, 59, 999)

  const schedules = await prisma.schedule.findMany({
    where: {
      userId,
      startTime: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
    },
    include: {
      patient: true,
    },
  })

  return schedules
}
