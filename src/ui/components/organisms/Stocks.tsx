import {
  GraphStocks,
  GraphStocksProps,
  TrackedStocks,
  TrackedStocksProps
} from '@components/molecules'

interface StocksProps extends TrackedStocksProps, GraphStocksProps {}

export const Stocks = ({ stocks, data, onDelete }: StocksProps) => {
  return (
    <section className='flex flex-col items-center gap-4 lg:h-[calc(100vh-96px-4rem)] lg:flex-row'>
      <GraphStocks data={data} />
      <TrackedStocks
        stocks={stocks}
        onDelete={onDelete}
      />
    </section>
  )
}
