import React from 'react'
import '../styles/Footer.css'
import { BsFillPinMapFill } from 'react-icons/bs';
import { MdOutlineCall } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { TbArrowBigTop } from 'react-icons/tb'

const Footer = () => {
  return (
<>
<footer className="footer">

  <div class="container-img">
    <img src="/logo-header.jpg" style={{height: "100px", borderRadius: "20px"}}/>
  </div>

  <div className="footer__addr"> 
         
    <h2>Contact</h2>
    
    <address>
    <BsFillPinMapFill /> Somewhere In The World  
    <p><MdOutlineCall /> +54 [My-Tinerary]</p> 
    </address>
  </div>

    <div className="footer__addr">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

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
</footer>
</>
  )
}

export default Footer