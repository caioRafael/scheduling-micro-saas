'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarNavItem,
  SidebarTitle,
} from '@/components/sidebar'
import { House, User, Users } from 'lucide-react'
import { SignOutButton } from './SignOutButton'
import { usePathname } from 'next/navigation'

export function ApSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar className="flex border-r berder-border">
      <SidebarHeader>
        <SidebarTitle>PsicoAgenda</SidebarTitle>
      </SidebarHeader>
      <SidebarContent className="flex-grow">
        <SidebarNavItem href="/app" active={pathname === '/app'}>
          <House />
          Inicio
        </SidebarNavItem>
        <SidebarNavItem
          href="/app/patients"
          active={pathname.includes('/app/patients')}
        >
          <Users />
          Pacientes
        </SidebarNavItem>
      </SidebarContent>
      <SidebarFooter>
        <SidebarNavItem
          href="/app/profile"
          active={pathname.includes('/app/profile')}
        >
          <User />
          Perfil
        </SidebarNavItem>
        <SignOutButton />
      </SidebarFooter>
    </Sidebar>
  )
}
