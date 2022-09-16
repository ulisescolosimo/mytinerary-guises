import React from 'react'
import '../styles/Cities.css'
import {Link as LinkRouter} from 'react-router-dom'

const CitiesCards = ({cities}) => { 

  console.log(cities);

  return (
    <div className="container-cards">
        {cities?.response.length !== 0 ? cities?.response.map((item) => 
        <LinkRouter to={`/details/${item._id}`}  className="card" id={item._id} style={{background: `url(${item.photo}`}}>
            <p className="card-title">{item.city}</p>
        </LinkRouter>)
        : <div className="not-found"><p>No results found. Please refine your search.</p></div>}
    </div>
  )
}

export default CitiesCards