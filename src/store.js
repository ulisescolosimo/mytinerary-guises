import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { myTineraryApi } from './features/citiesApi'

export const store = configureStore({
  reducer: {
    [myTineraryApi.reducerPath]: myTineraryApi.reducer,
  },
})

setupListeners(store.dispatch)