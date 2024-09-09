import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { GraphReducer } from '@data/store/slices'

const rootReducer = combineReducers({
  graph: GraphReducer
})

export const store = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
