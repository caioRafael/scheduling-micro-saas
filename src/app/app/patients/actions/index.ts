'use server'

import { Patient } from '@/interface/patients'
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
