import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'

export interface GraphStocksProps {
  data: { x: number; y: Date }[]
}

export const GraphStocks = ({ data }: GraphStocksProps) => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      style={{}}
    >
      <VictoryLine
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 1 }
        ]}
      />
    </VictoryChart>
  )
}
