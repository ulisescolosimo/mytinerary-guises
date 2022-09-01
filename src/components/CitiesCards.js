import React from 'react'
import '../styles/Cities.css'
import {Link as LinkRouter} from 'react-router-dom'


const CitiesCards = (props) => {   

  const itemFilter = props.items.filter((item) => item.city.toLowerCase().includes(props.input.toLowerCase()))

  return (
    <div className="container-cards">
        {itemFilter.length > 0 ? itemFilter.map((item) => 
        <LinkRouter to={`/details/${item._id}`}  className="card" id={item._id} style={{background: `url(${item.photo}`}}>
            <p className="card-title">{item.city}</p>
        </LinkRouter>)
        : <div className="not-found"><p>No results found. Please refine your search.</p></div>}
    </div>
  )
}

export default CitiesCards