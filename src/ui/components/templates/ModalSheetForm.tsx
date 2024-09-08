import { useState } from 'react'
import { Button, ModalSheet } from '@components/atoms'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { FormStocks, FormStocksProps } from '@components/molecules'

interface ModalSheetFormProps extends FormStocksProps {}

export const ModalSheetForm = ({ ...rest }: ModalSheetFormProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <section className='flex items-center justify-center lg:hidden'>
      <Button
        style='outline'
        type='button'
        className='fixed bottom-4 w-[90%]'
        onClick={handleOpen}
      >
        <MdKeyboardArrowUp
          size={24}
          className='flex-shrink-0'
        />
      </Button>
      {isOpen && (
        <ModalSheet
          onClose={handleClose}
          isOpen={isOpen}
          className='lg:hidden'
        >
          <FormStocks
            handleClose={handleClose}
            {...rest}
          />
        </ModalSheet>
      )}
    </section>
  )
}
