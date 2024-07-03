import { DataColumnsTable } from '@/interface/data-columns-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import Entity from '@/interface/entity'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface DataTableProps<T extends Entity> {
  data: T[]
  columns: DataColumnsTable<T>[]
}

export function DataTableContent<T extends Entity>({
  data,
  columns,
}: DataTableProps<T>) {
  return (
    <main className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>
                <div className="flex flex-row gap-2">
                  {column.headerIcon}
                  {column.header}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.render ? column.render(item) : item[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}

interface DataTableGenericProps {
  children: ReactNode
  className?: string
}

export function DataTable({ children, className }: DataTableGenericProps) {
  return (
    <main className={cn('w-full flex flex-col gap-2', className)}>
      {children}
    </main>
  )
}

export function DataTableHeader({
  children,
  className,
}: DataTableGenericProps) {
  return (
    <header className={cn('flex flex-row gap-2', className)}>{children}</header>
  )
}

export function DataTableFooter({
  children,
  className,
}: DataTableGenericProps) {
  return (
    <footer className={cn('flex flex-row gap-2', className)}>{children}</footer>
  )
}
