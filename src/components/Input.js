import React from 'react'
import '../styles/NewCities.css'

const Input = ({forwardRef, id}) => {
  return (<input type="text" className="input-form" required="" id={id} ref={forwardRef} />)
}

export default Input