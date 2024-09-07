import { useState } from 'react'
import { Button, ModalSheet } from '@components/atoms'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { FormTrackedStocks } from '@components/organisms'

export const ModalSheetForm = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='lg:hidden'>
      <Button
        style='outline'
        type='button'
        onClick={() => setIsOpen(true)}
      >
        <MdKeyboardArrowUp
          size={24}
          className='flex-shrink-0'
        />
      </Button>
      {isOpen && (
        <ModalSheet
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
        >
          <FormTrackedStocks />
        </ModalSheet>
      )}
    </section>
  )
}
