import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  className?: string
}

export const Layout = ({ children, className }: LayoutProps) => {
  return <div className={`min-h-dvh w-screen p-4 ${className}`}>{children}</div>
}
