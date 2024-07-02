import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ReactNode } from 'react'

interface SidebarGenericProps {
  children: ReactNode
  className?: string
}

interface SidebarNavItemProps extends SidebarGenericProps {
  href: string
  active?: boolean
}

export function Sidebar({ children, className }: SidebarGenericProps) {
  return (
    <aside
      className={cn('flex flex-col gap-2 border-r berder-border', className)}
    >
      {children}
    </aside>
  )
}

export function SidebarHeader({ children, className }: SidebarGenericProps) {
  return (
    <header
      className={cn(
        'flex flex-row items-center gap-2 p-3 h-14 border-b border-border',
        className,
      )}
    >
      {children}
    </header>
  )
}

export function SidebarTitle({ children, className }: SidebarGenericProps) {
  return <h2 className={cn('text-xl font-semibold', className)}>{children}</h2>
}

export function SidebarContent({ children, className }: SidebarGenericProps) {
  return (
    <div className={cn('flex flex-col gap-2 p-3', className)}>{children}</div>
  )
}

export function SidebarNavItem({
  children,
  className,
  href,
  active,
}: SidebarNavItemProps) {
  return (
    <Link
      href={href}
      className={cn([
        'flex flex-row items-center gap-2 p-2 rounded-md hover:bg-secondary transition-all',
        active
          ? 'bg-primary text-white hover:bg-primary/80 transition-all'
          : 'text-primary',
        className,
      ])}
    >
      {children}
    </Link>
  )
}

export function SidebarFooter({ children, className }: SidebarGenericProps) {
  return (
    <footer
      className={cn(
        'flex flex-col justify-center border-t border-border p-3',
        className,
      )}
    >
      {children}
    </footer>
  )
}
