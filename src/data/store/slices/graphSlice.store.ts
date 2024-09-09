import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/index'

interface GraphSlice {
  selectedStock: string
}

const initialState: GraphSlice = {
  selectedStock: ''
}

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    setSelectedStock: (
      state,
      action: PayloadAction<GraphSlice['selectedStock']>
    ) => {
      state.selectedStock = action.payload
    },

    resetSelectedStock: () => initialState
  }
})

export const GraphSelectors = {
  getSelectedStock: (state: RootState) => state.graph.selectedStock
}

export const { setSelectedStock, resetSelectedStock } = graphSlice.actions

export const GraphReducer = graphSlice.reducer
