import React, { useState } from 'react'
import '../styles/Header.css'
import {Link as LinkRouter} from 'react-router-dom'
import BurgerNav from '../components/BurgerNav';
import Navigation from './Navigation'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    const pages = [
        {name: 'Home', to: '/'},
        {name: 'Cities', to: '/cities'},
    ]

    const pagesUser = [
        {name: 'Home', to: '/'},
        {name: 'Cities', to: '/cities'},
        {name: 'My Tineraries', to: '/mytineraries'},
        {name: 'Create itinerary', to:'/new_itinerary'}
    ]

    const pagesAdmin = [
        {name: 'Home', to: '/'},
        {name: 'Cities', to: '/cities'},
        {name: 'New Cities', to: '/new_cities'},
        {name: 'Edit Cities', to: '/edit'},
        {name: 'My Tineraries', to: '/mytineraries'},
        {name: 'Create User', to:'/create'},
        {name: 'Create itinerary', to:'/new_itinerary'}
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
        <ToastContainer />
        <Navigation pages={pages} pagesUser={pagesUser} pagesAdmin={pagesAdmin} link={link} open={open} click={handleClick} />
        <BurgerNav pages={pages} pagesUser={pagesUser} pagesAdmin={pagesAdmin} handleBurger={handleBurger} open={open} link={link} clicked={clicked} click={handleClick} />
    </header>
)
}

export default Header