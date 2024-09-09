import { useFinnhub } from 'react-finnhub'
import { stocksAdapter } from '@data/adapters'
import { HttpStatusCode } from 'axios'

export const useStocksGraph = () => {
  const finnhub = useFinnhub()

  const getStockMetrics = async (symbol: string) => {
    try {
      const response = await finnhub.companyBasicFinancials(symbol, 'all')

      if (response.status === HttpStatusCode.Ok) {
        const adaptedStockMetrics = stocksAdapter(response.data)
        return adaptedStockMetrics
      }
    } catch (error) {
      throw error
    }
  }

  return {
    getStockMetrics
  }
}
