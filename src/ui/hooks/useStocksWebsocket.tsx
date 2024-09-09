import { useEffect, useState } from 'react'
import { StocksStates } from '@domain/constants'

export const useStocksWebsocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [stockData, setStockData] = useState<any[]>([])
  const [subscribedStocks, setSubscribedStocks] = useState<string[]>([])

  useEffect(() => {
    const ws = new WebSocket(
      `wss://ws.finnhub.io?token=${import.meta.env.VITE_FINNHUB_API_KEY}`
    )
    setSocket(ws)

    ws.addEventListener(StocksStates.open, () => {})

    ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data)
      if (message.type === 'trade') {
        const stock = message.data[0]
        const { s: symbol, p: price } = stock

        setStockData((prevData) => {
          const prevPrice = prevData[symbol]?.price || price
          const marginChange = ((price - prevPrice) / prevPrice) * 100

          return {
            ...prevData,
            [symbol]: {
              price: price,
              marginChange: marginChange.toFixed(2)
            }
          }
        })
      }
    })

    return () => {
      ws.close()
    }
  }, [])

  const subscribe = (symbol: string) => {
    if (socket) {
      socket.send(JSON.stringify({ type: StocksStates.subscribe, symbol }))
      setSubscribedStocks((prev) => [...prev, symbol])
    } else {
      console.error('WebSocket is not open')
    }
  }

  const unsubscribe = (symbol: string) => {
    if (socket) {
      socket.send(JSON.stringify({ type: StocksStates.unsubscribe, symbol }))
      setSubscribedStocks((prev) => prev.filter((s) => s !== symbol))
    } else {
      console.error('WebSocket is not open')
    }
  }

  return {
    socket,
    stockData,
    unsubscribe,
    subscribe,
    subscribedStocks
  }
}
