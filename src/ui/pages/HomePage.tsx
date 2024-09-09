import { ModalSheetForm } from '@components/templates'
import { StocksList, Stocks, SidebarForm } from '@components/organisms'
import { Layout } from '@components/atoms'
import { useStocksGraph, useStocksWebsocket } from '@hooks/index'
import { useQuery } from '@tanstack/react-query'
import { GraphSelectors } from 'src/data/store/slices'
import { useSelector } from 'react-redux'

export const HomePage = () => {
  const { stockData, unsubscribe, subscribe, subscribedStocks } =
    useStocksWebsocket()
  const selectedStock = useSelector(GraphSelectors.getSelectedStock)

  const { getStockMetrics } = useStocksGraph()

  const { data, isPending, isLoading } = useQuery({
    queryKey: ['stocksMetrics', selectedStock],
    queryFn: () => getStockMetrics(selectedStock),
    enabled: !!selectedStock,
    retry: false
  })

  function filterObjectByKeys(state, array) {
    const filteredState = {}

    array.forEach((symbol) => {
      if (state[symbol]) {
        filteredState[symbol] = state[symbol]
      }
    })

    return filteredState
  }

  const filteredStockData = filterObjectByKeys(stockData, subscribedStocks)

  return (
    <Layout className='flex pb-20 lg:!px-0 lg:py-4'>
      <SidebarForm onSubmit={subscribe} />
      <main className='right-0 w-full space-y-4 lg:ml-[22rem]'>
        <StocksList stocks={filteredStockData} />
        <Stocks
          stocks={subscribedStocks}
          onDelete={unsubscribe}
          isLoading={isLoading}
          data={selectedStock && !isPending ? data?.series.annualSales : []}
        />

        <ModalSheetForm onSubmit={subscribe} />
      </main>
    </Layout>
  )
}
