import React from 'react'
import CitiesCards from './CitiesCards'

const CitiesEvents = (props) => {
  
  const items = [
    { url: "/assets/madrid.jpg", title: "Madrid" },
    { url: "/assets/amsterdam.jpg", title: "Amsterdam" },
    { url: "/assets/paris.jpg", title: "Paris" },
    { url: "/assets/atenas.jpg", title: "Athens" },
    { url: "/assets/buenos-aires.jpg", title: "Buenos Aires" },
    { url: "/assets/roma.jpg", title: "Rome" },
    { url: "/assets/praga.jpg", title: "Prague" },
    { url: "/assets/london.jpg", title: "London" },
    { url: "/assets/tokyo.jpg", title: "Tokyo" },
    { url: "/assets/newyork.jpg", title: "New York" },
    { url: "/assets/saint.jpg", title: "Saint Petersburg" },
    { url: "/assets/istanbul.jpg", title: "Istanbul" },
]

  return (
      <CitiesCards items={items} input={props.input} />
  )
}

export default CitiesEvents