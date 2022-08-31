import React from 'react'
import '../styles/Cities.css'

const CitiesCards = (props) => {   

  const itemFilter = props.items.filter((item) => item.city.toLowerCase().includes(props.input.toLowerCase()))

  return (
    <div className="container-cards">
        {itemFilter.length > 0 ? itemFilter.map((item) => 
        <div class="card" style={{background: `url(${item.url})`}}>
            <p className="card-title">{item.city}</p>
        </div>) : <div className="not-found"><p>No results found. Please refine your search.</p></div>}
    </div>
  )
}

export default CitiesCards