import React from 'react'
import '../styles/Burger.css'

const BurgerButton = (props) => {
  return (
    <div class="icon nav-icon-5" onClick = {props.handleBurger}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default BurgerButton