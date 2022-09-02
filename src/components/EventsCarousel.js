import React from 'react'
import Carousel from './Carousel'
import axios from 'axios'
import { useState, useEffect } from 'react'

const EventsCarousel = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
      axios.get(`http://localhost:4000/cities/all`)
          .then(response => {
            setItems(response.data.response)
          })
  }, [])

  return (
    <>
      <Carousel data={items} range={4} interval={4} />
    </>
  )
}

export default EventsCarousel