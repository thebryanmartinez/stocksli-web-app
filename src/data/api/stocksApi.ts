import { api } from '@api/index'

export const getStockMetricsApi = async (symbol: string) => {
  return await api.get(`/stock/metric?symbol=${symbol}&metric=all`, {})
}
