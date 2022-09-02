import React from 'react'
import '../styles/Cities.css'
import {Link as LinkRouter} from 'react-router-dom'


const CitiesCards = (props) => { 

  return (
    <div className="container-cards">
        {props.items.length != 0 ? props.items.map((item) => 
        <LinkRouter to={`/details/${item._id}`}  className="card" id={item._id} style={{background: `url(${item.photo}`}}>
            <p className="card-title">{item.city}</p>
        </LinkRouter>)
        : <div className="not-found"><p>No results found. Please refine your search.</p></div>}
    </div>
  )
}

export default CitiesCards