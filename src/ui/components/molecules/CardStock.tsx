import { Card, CardProps, Typography } from '@components/atoms'

export interface CardStockProps extends Omit<CardProps, 'children'> {
  stockSymbol: string
  value: number
  marginChange: number
}

export const CardStock = ({
  stockSymbol,
  value,
  marginChange,
  className
}: CardStockProps) => {
  return (
    <Card className={`flex w-40 flex-col gap-4 bg-base-300 ${className}`}>
      <div className='flex justify-between'>
        <Typography variant='span'>{stockSymbol}</Typography>
        <Typography variant='span'>${Number(value).toFixed(2)}</Typography>
      </div>
      <Typography variant='p'>{Number(marginChange).toFixed(2)}%</Typography>
    </Card>
  )
}
