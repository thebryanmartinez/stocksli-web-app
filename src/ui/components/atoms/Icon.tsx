import { IconType } from 'react-icons'

interface IconProps {
  IconComponent: IconType
  className?: string
  onClick?: () => void
  size?: number
}

export const Icon = ({
  IconComponent,
  className,
  onClick,
  size = 24,
  ...rest
}: IconProps) => {
  return (
    <IconComponent
      size={size}
      className={`flex-shrink-0 ${className}`}
      onClick={onClick}
      {...rest}
    />
  )
}
