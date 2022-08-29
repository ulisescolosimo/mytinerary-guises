import React from 'react'
import '../styles/NewCities.css'

const Input = ({myRef, name, typeText}) => {

  return (
            <label className="input-label" htmlFor={name}>{name[0].toUpperCase() + name.substring(1)}
              <input type={ typeText ==='text' ? 'text' : 'textarea'} name={name} className="input-form" placeholder={`Enter ${name}`} id={name} ref={myRef} />
            </label>  
  )
}

export default Input