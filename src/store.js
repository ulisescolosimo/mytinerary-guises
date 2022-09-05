import { configureStore } from '@reduxjs/toolkit'
import citiesApi  from './features/citiesApi'

export default configureStore({
  reducer: {
    [citiesApi.reducerPath] : citiesApi.reducer
  },
  middleware: (getAllCities) => getAllCities({
      immutableCheck: false,
      serializableCheck: false
  })
})