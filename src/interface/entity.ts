/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface Entity {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  [key: string]: any
}
