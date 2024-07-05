import Entity from './entity'
import { Patient } from './patients'

export interface Schedule extends Entity {
  patientId: string
  userId: string
  startTime: Date
  endTime: Date
  patient?: Patient
}
