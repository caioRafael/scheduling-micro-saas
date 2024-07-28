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
import { useEffect } from 'react'
import { FirstAccessModal } from './FirstAccessModal'
import { SuportButton } from './SuportButton'

export function ApSidebar() {
  const pathname = usePathname()

  useEffect(() => {
    if (!localStorage.getItem('firstTimeUser')) {
      localStorage.setItem('firstTimeUser', 'true')
    }
  }, [])
  return (
    <Sidebar className="flex border-r berder-border">
      <FirstAccessModal />
      <SidebarHeader>
        <SidebarTitle>HealthPlaning</SidebarTitle>
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
        <SuportButton />
      </SidebarFooter>
    </Sidebar>
  )
}
