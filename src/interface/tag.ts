import Entity from './entity'
import { Patient } from './patients'

export interface Tag extends Entity {
  title: string
  description?: string
  color: string

  userId: string
  patients?: Patient[]
}
