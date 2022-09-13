import React from 'react'
import BurgerButton from './BurgerButton'
import { Link } from 'react-router-dom'

const Navigation = (props) => {

  const pages = props.pages
  const open = props.open

  return (
    <nav class="navigation-menu">
        <div className="navbar-container">
            <img className="nav-bar-logo" src="/logo-header.jpg" style={{height: '90%'}}/>
            <ul className="list">
                {pages.map(props.link)}
                <button className="btn-navigation" onClick = {props.click}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></button>
            </ul>
            <BurgerButton onClick = {props.clicked} />
        </div>
        <div className='profile-Select'>
            { open ?
                <ul>
                    <Link to='/auth/signup'>Sign Up</Link>
                    <li>Log In</li>
                </ul>
                : null
            }
        </div>
    </nav> 
  )
}

export default Navigation
//