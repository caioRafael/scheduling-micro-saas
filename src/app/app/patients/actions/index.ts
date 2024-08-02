'use server'

import { Patient } from '@/interface/patients'
import { Schedule } from '@/interface/schedule'
import { prisma } from '@/services/database'

export async function createPatient(data: Patient, userId: string) {
  const patient = await prisma.patient.create({
    data: {
      ...data,
      userId,
    },
  })

  return patient
}

export async function listPatients(userId: string) {
  const patients = await prisma.patient.findMany({
    where: {
      userId,
    },
  })

  return patients
}

export async function findOnePatient(patientId: string) {
  const patient = await prisma.patient.findUnique({
    where: {
      id: patientId,
    },
  })

  return patient
}

export async function updatePatient(patientId: string, data: Patient) {
  const patient = await prisma.patient.update({
    where: {
      id: patientId,
    },
    data,
  })

  return patient
}

export async function createSchedule(data: Schedule) {
  const schedule = await prisma.schedule.create({
    data: {
      userId: data.userId,
      patientId: data.patientId,
      startTime: new Date(data.startTime),
      endTime: new Date(data.endTime),
    },
  })

  return schedule
}

export async function listSchedulesByPatient(patientId: string) {
  const schedules = await prisma.schedule.findMany({
    where: {
      patientId,
    },
    include: {
      patient: true,
    },
    orderBy: {
      startTime: 'desc',
    },
  })

  return schedules
}
