import { useEffect, useState } from 'react'
import { StocksStates } from '@domain/constants'

export const useStocksWebsocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [subscribedStocks, setSubscribedStocks] = useState<string[]>([])

  // useEffect(() => {
  //   const ws = new WebSocket(
  //     `wss://ws.finnhub.io?token=${import.meta.env.VITE_FINNHUB_API_KEY}`
  //   )
  //   setSocket(ws)

  //   ws.addEventListener(StocksStates.open, () => {})

  //   ws.addEventListener('message', (event) => {
  //     const data = JSON.parse(event.data)
  //     setMessages((prevMessages) => [...prevMessages, data])
  //     console.log('Message from server:', data)
  //   })

  //   return () => {
  //     ws.close()
  //   }
  // }, [])

  const subscribe = (symbol: string) => {
    // if (socket && socket.OPEN) {
    // socket.send(JSON.stringify({ type: StocksStates.subscribe, symbol }))
    setSubscribedStocks((prev) => [...prev, symbol])
    // } else {
    // console.error('WebSocket is not open')
    // }
  }

  const unsubscribe = (symbol: string) => {
    // if (socket && socket.OPEN) {
    //   socket.send(JSON.stringify({ type: StocksStates.unsubscribe, symbol }))
    setSubscribedStocks((prev) => prev.filter((s) => s !== symbol))
    // } else {
    //   console.error('WebSocket is not open')
    // }
  }

  return {
    socket,
    messages,
    unsubscribe,
    subscribe,
    subscribedStocks
  }
}
