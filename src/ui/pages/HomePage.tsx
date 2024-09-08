import { ModalSheetForm } from '@components/templates'
import { StocksList } from '@components/organisms'
import { Layout } from '@components/atoms'

export const HomePage = () => {
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
    <Layout>
      <StocksList stocks={stocks} />
      <ModalSheetForm />
    </Layout>
  )
}
