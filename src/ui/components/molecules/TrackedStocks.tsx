import { useState } from 'react'
import { MdCheck, MdDelete, MdUndo } from 'react-icons/md'
import { Icon, Typography } from '@components/atoms'
import { useDispatch, useSelector } from 'react-redux'
import { GraphSelectors, setSelectedStock } from 'src/data/store/slices'

interface TrackedStockProps {
  stockSymbol: string
  onDelete: (symbol: string) => void
  onClick: (symbol: string) => void
  isSelected: boolean
}

const TrackedStock = ({
  stockSymbol,
  onDelete,
  onClick,
  isSelected
}: TrackedStockProps) => {
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

  const selectedClassName = isSelected ? 'bg-primary-content' : ''

  return (
    <div
      key={stockSymbol}
      className={`flex w-full justify-between rounded-xl border p-4 ${selectedClassName}`}
      onClick={() => onClick(stockSymbol)}
    >
      <Typography variant='h2'>{stockSymbol}</Typography>
      {!confirmDelete ? (
        <MdDelete
          size={24}
          className='flex-shrink-0 text-error'
          onClickCapture={handleDelete}
        />
      ) : (
        <div className='flex gap-4'>
          <Icon
            IconComponent={MdUndo}
            size={24}
            onClickCapture={handleUndo}
          />

          <Icon
            IconComponent={MdCheck}
            size={24}
            className='text-success'
            onClickCapture={handleDeleteConfirm}
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
  const dispatch = useDispatch()
  const selectedStock = useSelector(GraphSelectors.getSelectedStock)

  const handleClick = (symbol: string) => {
    dispatch(setSelectedStock(symbol))
  }

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
                onClick={handleClick}
                isSelected={stock === selectedStock}
              />
            )
          })}
        </div>
      </article>
    )
  )
}
