import { configureStore } from '@reduxjs/toolkit'
import citiesApi  from './features/citiesApi'
import activityAPI  from './features/activitiesAPI'

export default configureStore({
  reducer: {
    [citiesApi.reducerPath] : citiesApi.reducer,
    [activityAPI.reducerPath]: activityAPI.reducer,
  },
  middleware: (getAllCities) => getAllCities({
      immutableCheck: false,
      serializableCheck: false
  })
})
