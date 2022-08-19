import React from 'react'
import '../styles/Footer.css'
import { BsFillPinMapFill } from 'react-icons/bs';
import { MdOutlineCall } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import around from '../assets/around.png'

const Footer = () => {
  return (
<>
<footer className="footer">

  <div class="container-img">
    <img src={around} style={{height: "150px"}}/>
  </div>

  <div className="footer__addr">
    <h1 className="footer__logo">MyTinerary</h1>
        
    <h2>Contact</h2>
    
    <address>
    <BsFillPinMapFill /> Somewhere In The World  
    <p><MdOutlineCall /> +54 [My-Tinerary]</p> 
    </address>
  </div>

    <div className="footer__addr">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

      <ul className="nav__ul-icons">
        <li class="li">
          <a href="#" class="a-item"><BsFacebook size={40} style={{color: "black"}}/> </a>
        </li>

        <li class="li">
          <a href="#"><AiFillTwitterCircle size={40} style={{color: "black"}}/> </a>
        </li>
            
        <li class="li">
          <a href="#"><AiFillInstagram size={40} style={{color: "black"}}/> </a>
        </li>
        <li class="li">
          <a href="#"><BsWhatsapp size={40} style={{color: "black"}} /> </a>
        </li>
      </ul>
    </li>
  </div>
</footer>
</>
  )
}

export default Footer