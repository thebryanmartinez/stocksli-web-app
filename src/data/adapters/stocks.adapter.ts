import { BasicFinancials } from 'react-finnhub'

export const stocksAdapter = (response: BasicFinancials) => {
  const adaptedAnnualSales: Record<string, string | number>[] =
    response?.series?.annual?.salesPerShare?.map((item: any) => {
      return {
        date: item.period,
        value: item.v
      }
    })

  return {
    symbol: response.symbol,
    metric: response.metric,
    metricType: response.metricType,
    series: {
      annualSales: adaptedAnnualSales.reverse()
    }
  }
}
