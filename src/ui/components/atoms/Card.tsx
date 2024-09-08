import { ReactNode } from 'react'

export interface CardProps {
  className?: string
  children: ReactNode
}

export const Card = ({ className, children }: CardProps) => {
  return <div className={`${className} rounded-xl p-4`}>{children}</div>
}
