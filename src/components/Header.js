import React, { useState } from 'react'
import '../styles/Header.css'
import {Link as LinkRouter} from 'react-router-dom'
import BurgerNav from '../components/BurgerNav';
import Navigation from './Navigation'

const Header = () => {

    const pages = [
        {name: 'Home', to: '/'},
        {name: 'Cities', to: '/cities'},
        {name: 'New Cities', to: '/new_cities'},
        {name: 'Edit Cities', to: '/edit'},
        {name: 'My Tineraries', to: '/mytineraries'}
    ]

    const link = (page) => <LinkRouter className="items" to={page.to}>{page.name}</LinkRouter>

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const [clicked, setClicked] = useState(false)

    const handleBurger = () => {
        setClicked(!clicked)
    }

return (
    <header>
        <Navigation pages={pages} link={link} open={open} click={handleClick} />
        <BurgerNav pages={pages} handleBurger={handleBurger} open={open} link={link} clicked={clicked} click={handleClick} />
    </header>
)
}

export default Header