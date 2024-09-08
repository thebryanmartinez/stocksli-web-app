import {
  GraphStocks,
  GraphStocksProps,
  TrackedStocks,
  TrackedStocksProps
} from '@components/molecules'

interface StocksProps extends TrackedStocksProps, GraphStocksProps {}

export const Stocks = ({ stocks, data }: StocksProps) => {
  return (
    <main>
      <GraphStocks data={data} />
      <TrackedStocks stocks={stocks} />
    </main>
  )
}
