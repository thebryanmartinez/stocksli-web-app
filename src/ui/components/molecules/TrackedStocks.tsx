import { useState } from 'react'
import { MdCheck, MdDelete, MdUndo } from 'react-icons/md'
import { Icon, Typography } from '@components/atoms'

interface TrackedStockProps {
  stockSymbol: string
  onDelete: (symbol: string) => void
}

const TrackedStock = ({ stockSymbol, onDelete }: TrackedStockProps) => {
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleDelete = () => {
    setConfirmDelete(true)
  }

  const handleUndo = () => {
    setConfirmDelete(false)
  }

  const handleDeleteConfirm = () => {
    onDelete(stockSymbol)
    handleUndo()
  }

  return (
    <div
      key={stockSymbol}
      className='flex w-full justify-between rounded-xl border p-4'
    >
      <Typography variant='h2'>{stockSymbol}</Typography>
      {!confirmDelete ? (
        <MdDelete
          size={24}
          className='flex-shrink-0 text-error'
          onClick={handleDelete}
        />
      ) : (
        <div className='flex gap-4'>
          <Icon
            IconComponent={MdUndo}
            size={24}
            onClick={handleUndo}
          />

          <Icon
            IconComponent={MdCheck}
            size={24}
            className='text-success'
            onClick={handleDeleteConfirm}
          />
        </div>
      )}
    </div>
  )
}

export interface TrackedStocksProps {
  stocks: string[]
  onDelete: (symbol: string) => void
}

export const TrackedStocks = ({ stocks, onDelete }: TrackedStocksProps) => {
  return (
    stocks.length > 0 && (
      <article className='max-h-full w-full flex-col rounded-xl bg-base-200 p-4 lg:w-1/3'>
        <Typography variant='h2'>Tracked Stocks</Typography>
        <div className='flex max-h-96 w-full flex-col gap-4 overflow-auto py-8'>
          {stocks.map((stock) => {
            return (
              <TrackedStock
                stockSymbol={stock}
                onDelete={onDelete}
              />
            )
          })}
        </div>
      </article>
    )
  )
}
