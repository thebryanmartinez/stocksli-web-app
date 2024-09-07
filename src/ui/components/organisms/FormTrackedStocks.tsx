import { FormStocks, TrackedStocks } from '@components/molecules'

export const FormTrackedStocks = () => {
  return (
    <section className='flex flex-col gap-4'>
      <FormStocks />
      <TrackedStocks stocks={['AAPL', 'GOOG', 'MSFT']} />
    </section>
  )
}
