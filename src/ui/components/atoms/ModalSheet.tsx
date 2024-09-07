import { Sheet } from 'react-modal-sheet'
import { ReactNode } from 'react'

interface ModalSheetProps {
  onClose: () => void
  children: ReactNode
  className?: string
  isOpen: boolean
}

export const ModalSheet = ({
  isOpen,
  onClose,
  children,
  className
}: ModalSheetProps) => {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      detent='content-height'
    >
      <Sheet.Container className={`!bg-base-100 ${className}`}>
        <Sheet.Header></Sheet.Header>
        <Sheet.Content className='w-full px-6'>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  )
}
