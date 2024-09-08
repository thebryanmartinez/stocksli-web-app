import { CardStock, CardStockProps } from '@components/molecules'

interface StocksListProps {
  stocks: CardStockProps[]
}

export const StocksList = ({ stocks }: StocksListProps) => {
  return (
    <section className='carousel gap-4 rounded-box'>
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
