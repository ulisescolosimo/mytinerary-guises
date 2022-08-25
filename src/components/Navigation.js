import React from 'react'
import { BiUserCircle } from 'react-icons/bi';
import BurgerButton from './BurgerButton'

const Navigation = (props) => {

  const pages = props.pages
  const open = props.open

  return (
    <nav class="navigation-menu">
        <div className="navbar-container">
            <img className="nav-bar-logo" src="http://localhost:3000/logo-header.jpg" style={{height: '100%'}}/>
            <ul className="list">
                {pages.map(props.link)}
                <BiUserCircle onClick = {props.click} size={35} style={{color: 'white'}}/>
            </ul>
            <BurgerButton onClick = {props.clicked} />
        </div>
        <div className='profile-Select'>
            { open ?
                <ul>
                    <li>Log In</li>
                    <li>Profile</li>
                </ul>
                : null
            }
        </div>
    </nav> 
  )
}

export default Navigation