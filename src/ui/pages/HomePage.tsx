import { ModalSheetForm } from '@components/templates'
import { StocksList, Stocks, SidebarForm } from '@components/organisms'
import { Layout } from '@components/atoms'
import { useStocksGraph, useStocksWebsocket } from '@hooks/index'
import { useQuery } from '@tanstack/react-query'
import { useFinnhub } from 'react-finnhub'

export const HomePage = () => {
  const { messages, unsubscribe, subscribe, subscribedStocks } =
    useStocksWebsocket()
  const finnhub = useFinnhub()

  const { getStockMetrics } = useStocksGraph()

  const { data, isPending } = useQuery({
    queryKey: ['stocksMetrics', subscribedStocks],
    queryFn: () => getStockMetrics('AAPL'),
    enabled: subscribedStocks.length > 0,
    retry: false
  })

  console.log(data)

  const stocks = [
    {
      stockSymbol: 'AAPL',
      value: 20,
      marginChange: 1.34
    },
    {
      stockSymbol: 'GOOG',
      value: 100.342,
      marginChange: 3.32
    },
    {
      stockSymbol: 'MSFT',
      value: 200.42123123,
      marginChange: -0.32
    }
  ]

  return (
    <Layout className='flex pb-20 lg:!px-0 lg:py-4'>
      <SidebarForm onSubmit={subscribe} />
      <main className='right-0 w-full space-y-4 lg:ml-[22rem]'>
        <StocksList stocks={stocks} />
        {!isPending && (
          <Stocks
            stocks={subscribedStocks}
            onDelete={unsubscribe}
            data={data?.series.annualSales}
          />
        )}

        <ModalSheetForm onSubmit={subscribe} />
      </main>
    </Layout>
  )
}
