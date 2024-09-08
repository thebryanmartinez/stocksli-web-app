import { Sheet } from 'react-modal-sheet'
import { ReactNode } from 'react'

interface ModalSheetProps {
  onClose: () => void
  children: ReactNode
  className?: string
  isOpen: boolean
  classNameContainer?: string
}

export const ModalSheet = ({
  isOpen,
  onClose,
  children,
  className,
  classNameContainer
}: ModalSheetProps) => {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      detent='content-height'
      className={className}
    >
      <Sheet.Container className={`!bg-base-100 ${classNameContainer}`}>
        <Sheet.Header></Sheet.Header>
        <Sheet.Content className='w-full p-6'>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  )
}
