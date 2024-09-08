import { CardStock, CardStockProps, EmptyState } from '@components/molecules'
import { MdOutlineErrorOutline } from 'react-icons/md'

interface StocksListProps {
  stocks: CardStockProps[]
}

export const StocksList = ({ stocks }: StocksListProps) => {
  return (
    <section className='carousel w-full gap-4 overflow-x-scroll rounded-box'>
      {stocks.length > 0 ? (
        stocks.map((card) => {
          return (
            <CardStock
              key={card.stockSymbol}
              {...card}
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
