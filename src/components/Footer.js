import React from 'react'
import '../styles/Footer.css'
import {Link as LinkRouter} from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { TbArrowBigTop } from 'react-icons/tb'

const Footer = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
<footer>
  <div className="footer">
  <div class="container-img">
    <img src="/logo-header.jpg" style={{height: "100px", borderRadius: "20px"}}/>
  </div>

    <div className="footer__addr">
    <li className="nav__item">
      <div className="nav__ul-icons">
          <a href="#" class="a-item"><BsFacebook size={40} style={{color: "white"}}/> </a>
          <a href="#"><AiFillTwitterCircle size={40} style={{color: "white"}}/> </a>
          <a href="#"><AiFillInstagram size={40} style={{color: "white"}}/> </a>
          <a href="#"><BsWhatsapp size={40} style={{color: "white"}} /> </a>
      </div>
    </li>
  </div>
  <div className="buttonScroll-Container">
    <button className="button-top"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          padding: '.5rem 1rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: 'white',
          borderRadius: '30%',
          color: 'black',
          textAlign: 'center',
        }}
      >
        <TbArrowBigTop/>       
      </button>
      <p>Back to top</p>
    </div>
    </div>
    <div className='nav-footer'>
      <div className='container-footer-nav'>
        <LinkRouter className="items" to='/'>Home</LinkRouter>
        <LinkRouter className="items" to='/cities'>Cities</LinkRouter>
      </div>
      <div className="copyright">
        <p>&copy; Copyright 2022, Guises Inc.</p>
      </div>
      <div className='container-date'>
        <p>Current date is {date}</p>
      </div>
    </div>
</footer>

  )
}

export default Footer