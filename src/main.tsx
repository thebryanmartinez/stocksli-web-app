import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { finnhubClient, FinnhubProvider } from 'react-finnhub'

export const queryClient = new QueryClient()
const client = finnhubClient(import.meta.env.VITE_FINNHUB_API_KEY)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FinnhubProvider client={client}>
        <App />
      </FinnhubProvider>
    </QueryClientProvider>
  </StrictMode>
)
