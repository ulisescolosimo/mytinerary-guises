import React from 'react'
import Carousel from './Carousel'
import { useGetAllCitiesQuery, useGetCityNameQuery } from '../features/citiesApi' 

const EventsCarousel = () => {

  const {data: cities} = useGetAllCitiesQuery()

  return (
    <>
      <Carousel data={cities} range={4} interval={4} />
    </>
  )
}

export default EventsCarousel