import { IconType } from 'react-icons'
import { Icon, Typography } from '@components/atoms'

interface EmptyStateProps {
  className?: string
  label: string
  IconComponent: IconType
}

export const EmptyState = ({
  className,
  label,
  IconComponent
}: EmptyStateProps) => {
  return (
    <div
      className={`${className} flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border`}
    >
      <Icon IconComponent={IconComponent} />
      <Typography variant='span'>{label}</Typography>
    </div>
  )
}
