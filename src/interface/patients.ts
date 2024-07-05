import Entity from './entity'

export interface Patient extends Entity {
  name: string
  phone: string
  age: number
  birthday: Date
  gender: string
  address: string
  city: string
  state: string
  zip: string
  userId?: string
}
