import React from 'react'
import '../styles/BurgerNav.css'
import BurgerButton from './BurgerButton'
import {Link as LinkRouter} from 'react-router-dom'

const BurgerNav = (props) => {

  const open = props.open

  return (
    <nav className="HamburguerMenu-nav">
      <div className="HamburguerMenu">
      <div className="navbar-container-burger">
            <img className="nav-bar-logo" src="http://localhost:3000/logo-header.jpg" style={{height: '100%'}}/>
            <BurgerButton handleBurger = {props.handleBurger} />
      </div>
      </div>
            {props.clicked ? <div className='Hamburguer-logs'>
                    {props.pages.map(props.link)}
                      <div class="container-log">
                          <button className="btn-navigation" onClick = {props.click}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></button>
                          <div className='container-log-2'>
            { open ?
                <ul>
                    <li><LinkRouter to="/">Log In</LinkRouter></li>
                    <li><LinkRouter to="/">Profile</LinkRouter></li>
                </ul>
                : null
            }
        </div>
                      </div>
                      
                      </div>
                    : null
                    }   
            </nav>
  )
}

export default BurgerNav