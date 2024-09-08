import { VictoryArea, VictoryAxis, VictoryChart } from 'victory'
import { EmptyState } from '@components/molecules'
import { MdOutlineErrorOutline } from 'react-icons/md'

export interface GraphStocksProps {
  data: { x: number; y: Date }[]
}

export const GraphStocks = ({ data }: GraphStocksProps) => {
  return (
    <div className='h-full w-full lg:w-2/3'>
      {data.length > 0 ? (
        <VictoryChart>
          <VictoryArea
            style={{ data: { stroke: '#c43a31', fill: '#c43a31' } }}
          />
          <VictoryAxis
            dependentAxis
            label={'Price'}
            style={{
              tickLabels: { fill: '#c43a31' },
              axisLabel: { fill: '#c43a31' }
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
