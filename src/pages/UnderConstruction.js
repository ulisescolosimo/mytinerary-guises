import React from 'react'
import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/Maintenance.css'

const UnderConstruction = () => {
  return (
      <div className="container-maintenance">
        <h2 class="title-maintenance">Under Construction</h2>
        <p>Easily let website visitors know your site is undergoing maintenance.</p>
        <img src="./assets/mantenimiento.png" style={{width: "500px", height: "100%"}} alt="trabajando" />
      </div>
  )
}

export default UnderConstruction