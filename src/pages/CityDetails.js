import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Details from '../components/Details'
import Itinerary from '../components/Itinerary'
import Comments from '../components/Comments'

const CityDetails = () => {

  const { id } = useParams();
  const [itinerary, setItinerary] = useState({}) 

  useEffect(() =>{
        async function fetchData() {
              const itineraries = await axios.get(`http://localhost:4000/itineraries/?city=${id}`)
              setItinerary(itineraries.data.response)
        }
            fetchData();
        }, []);

  return (
    <>
        <Details />
        <Itinerary itinerary={itinerary} />
    </>
  )
}

export default CityDetails