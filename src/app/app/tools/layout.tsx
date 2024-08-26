import { ReactNode } from 'react'

interface ToolsLayoutProps {
  children: ReactNode
}

export default async function ToolsLayout({ children }: ToolsLayoutProps) {
  return <div className="w-full flex flex-col gap-3">{children}</div>
}
