import { ReactNode } from 'react'

export interface DataColumnsTable<T> {
  header: string
  headerIcon?: ReactNode
  key: string
  render?: (value: T) => ReactNode
}
