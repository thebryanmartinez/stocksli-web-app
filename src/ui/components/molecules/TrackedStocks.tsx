import { MdDelete } from 'react-icons/md'

interface TrackedStocksProps {
  stocks: Array<string>
}

export const TrackedStocks = ({ stocks }: TrackedStocksProps) => {
  return (
    <article className='flex flex-col gap-4 rounded-xl bg-base-100 p-4'>
      <h2>Tracked Stocks</h2>
      {stocks.map((stock) => {
        return (
          <div
            key={stock}
            className='flex w-full justify-between rounded-xl border p-4'
          >
            <h2>{stock}</h2>
            <MdDelete
              size={24}
              className='flex-shrink-0 text-error'
            />
          </div>
        )
      })}
    </article>
  )
}
