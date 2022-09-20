import React from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Details'
import Itinerary from '../components/Itinerary'
import { useGetItinerariesCityQuery } from '../features/itineraryAPI'

const CityDetails = () => {

  const { id } = useParams();

    let idCity = id
    let { data: cities } = useGetItinerariesCityQuery(idCity)
    let city = cities?.response

  return (
    <>
        <Details />
        <Itinerary city={city} />
    </>
  )
}

export default CityDetails