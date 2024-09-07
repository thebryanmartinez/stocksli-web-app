import { SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
  stockSymbol: string
  priceAlert: number
}

export const FormStocks = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-4'
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
      <button
        className='btn btn-primary'
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}
