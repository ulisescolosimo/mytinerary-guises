import React, { useState } from 'react'
import '../styles/Header.css'
import {Link as LinkRouter} from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi';

const Header = () => {

    const pages = [
        {name: 'Home', to: '/'},
        {name: 'Cities', to: '/cities'},
    ]

    const link = (page) => <LinkRouter className="items" to={page.to}>{page.name}</LinkRouter>

    const[open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
return (
    <nav>
        <div className="navbar-container">
            <img className="nav-bar-logo" src="http://localhost:3000/logo-header.jpg" style={{height: '100%'}}/>
            <ul className="list">
                {pages.map(link)}
                <BiUserCircle onClick = {handleClick} size={35} style={{color: 'white'}}/>
            </ul>
        </div>
        <div className='profile-Select'>
            { open ?
                <ul>
                    <li>Log In</li>
                    <li>Profile</li>
                </ul>
                :null
            }
        </div>
    </nav>
)
}

export default Header