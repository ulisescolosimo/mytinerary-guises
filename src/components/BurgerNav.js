import React from 'react'
import { BiUserCircle } from 'react-icons/bi';
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
                          <BiUserCircle onClick = {props.click} size={35} style={{color: 'white'}}/>
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