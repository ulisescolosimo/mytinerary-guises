import React from 'react'
import CitiesCards from './CitiesCards'
import axios from 'axios'
import { useState, useEffect } from 'react'

const CitiesEvents = (props) => {

  const [items, setItems] = useState([])

  useEffect(() => {
      axios.get(`http://localhost:4000/cities/all`)
          .then(response => setItems(response.data.response))
  }, [])

  return (
      <CitiesCards items={items} input={props.input} />
  )
}

export default CitiesEvents