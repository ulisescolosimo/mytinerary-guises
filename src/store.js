import { configureStore } from '@reduxjs/toolkit'
import citiesSlides from './features/citiesSlides'

export default configureStore({
  reducer: {
    cities: citiesSlides
  }
})