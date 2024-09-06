import { ReactNode } from 'react'

export interface ButtonProps {
  type: 'submit' | 'button' | 'reset'
  style: 'primary' | 'secondary' | 'outline' | 'ghost'
  children: string | ReactNode
  onClick?: () => void
  className?: string
  loading?: boolean
  form?: string
}

export const Button = ({
  type,
  style,
  children,
  onClick,
  className,
  loading,
  form,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} btn btn-${style}`}
      onClick={onClick}
      {...rest}
    >
      {loading && <span className='loading loading-spinner' />}
      {!loading && children}
    </button>
  )
}
