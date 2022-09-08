import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Details from '../components/Details'
import Itinerary from '../components/Itinerary'
import Comments from '../components/Comments'
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