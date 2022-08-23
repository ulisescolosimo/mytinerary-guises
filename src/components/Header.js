import React from 'react'
import '../styles/Header.css'
import {Link as LinkRouter} from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi';

const Header = () => {

    const pages = [
        {name: 'Home', to: '/'},
        {name: 'Cities', to: '/cities'},
    ]

    const link = (page) => <LinkRouter className="items" to={page.to}>{page.name}</LinkRouter>

return (
    <nav>
    <div className="navbar-container">
    <img className="nav-bar-logo" src="http://localhost:3000/logo-header.jpg" style={{height: '100%'}}/>
    <ul className="list">
        {pages.map(link)}
        <BiUserCircle size={35} style={{color: 'white'}}/>
    </ul>
    </div>
    </nav>
)
}

export default Header