import { MdOutlineErrorOutline } from 'react-icons/md'
import { CardStock, EmptyState } from '@components/molecules'

export const StocksList = ({
  stocks
}: {
  stocks: Record<string, { price: number; marginChange: number }>
}) => {
  const stockEntries = Object.entries(stocks)

  return (
    <section className='carousel w-full gap-4 overflow-x-scroll rounded-box'>
      {stockEntries.length > 0 ? (
        stockEntries.map(([stockSymbol, stockData]) => {
          return (
            <CardStock
              key={stockSymbol}
              stockSymbol={stockSymbol}
              value={stockData.price}
              marginChange={stockData.marginChange}
              className='carousel-item'
            />
          )
        })
      ) : (
        <EmptyState
          className='h-full w-full'
          label='No stocks selected yet'
          IconComponent={MdOutlineErrorOutline}
        />
      )}
    </section>
  )
}
