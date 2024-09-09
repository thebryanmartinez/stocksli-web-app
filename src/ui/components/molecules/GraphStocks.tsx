import { VictoryArea, VictoryAxis, VictoryChart, VictoryTooltip } from 'victory'
import { EmptyState } from '@components/molecules'
import { MdOutlineErrorOutline } from 'react-icons/md'

export interface GraphStocksProps {
  data: { value: number; date: string }[]
  isLoading: boolean
}

export const GraphStocks = ({ data, isLoading }: GraphStocksProps) => {
  return (
    <div className='h-full w-full lg:w-2/3'>
      {isLoading ? (
        <div className='flex h-52 w-full flex-1 items-center justify-center lg:h-full'>
          <span className='loading loading-spinner' />
        </div>
      ) : data.length > 0 ? (
        <VictoryChart>
          <VictoryArea
            style={{
              data: {
                stroke: '#8468df',
                fill: '#a992f7',
                fillOpacity: 0.8,
                strokeWidth: 3
              }
            }}
            data={data}
            x='date'
            y='value'
          />
          <VictoryAxis
            dependentAxis
            label={'Price'}
            tickFormat={(value) => `$${value.toFixed(2)}`}
            style={{
              tickLabels: { fill: '#a992f7' }
            }}
          />
        </VictoryChart>
      ) : (
        <EmptyState
          className='h-52 lg:h-full'
          IconComponent={MdOutlineErrorOutline}
          label='No stocks selected yet for tracking'
        />
      )}
    </div>
  )
}
