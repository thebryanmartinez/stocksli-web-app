import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@components/atoms'
interface Inputs {
  stockSymbol: string
  priceAlert: number
}

export interface FormStocksProps {
  onSubmit: (symbol: string, priceAlert?: number) => void
  handleClose?: () => void
}

export const FormStocks = ({ onSubmit, handleClose }: FormStocksProps) => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onHandleSubmit: SubmitHandler<Inputs> = (data) => {
    onSubmit(data.stockSymbol)
    handleClose?.()
  }

  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className='flex w-full flex-col gap-4'
    >
      <label htmlFor='stockSymbol'>Stock Symbol</label>
      <select
        className='input input-bordered'
        id='stockSymbol'
        {...register('stockSymbol')}
      >
        <option value='AAPL'>AAPL</option>
        <option value='GOOG'>GOOG</option>
        <option value='MSFT'>MSFT</option>
      </select>
      <label htmlFor='priceAlert'>Price Alert</label>
      <input
        className='input input-bordered'
        id='priceAlert'
        type='number'
        {...register('priceAlert')}
      />
      <Button
        style='primary'
        type='submit'
      >
        Submit
      </Button>
    </form>
  )
}
