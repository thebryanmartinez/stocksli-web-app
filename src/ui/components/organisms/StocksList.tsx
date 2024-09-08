import { CardStock, CardStockProps } from '@components/molecules'

interface StocksListProps {
  stocks: CardStockProps[]
}

export const StocksList = ({ stocks }: StocksListProps) => {
  return (
    <section className='carousel w-full gap-4 overflow-x-scroll rounded-box'>
      {stocks.map((card) => {
        return (
          <CardStock
            key={card.stockSymbol}
            {...card}
            className='carousel-item'
          />
        )
      })}
    </section>
  )
}
