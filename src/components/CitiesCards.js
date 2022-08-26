import React from 'react'
import '../styles/Cities.css'
import { MdSearchOff } from 'react-icons/md';

const CitiesCards = (props) => {    

  const itemFilter = props.items.filter((item => item.title.toLowerCase().includes(props.input.toLowerCase())))

  return (
    <div className="container-cards">
        {itemFilter.length > 0 ? itemFilter.map((item) => 
        <div class="card">
            <p>{item.title}</p>
            <img src={item.url} alt={item.title} />
        </div>) : <div className="not-found"><MdSearchOff size={50} /><p>No results found. Please refine your search.</p></div>}
    </div>
  )
}

export default CitiesCards