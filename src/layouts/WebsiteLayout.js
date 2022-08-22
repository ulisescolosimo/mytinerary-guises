import React from 'react'
import Welcome from '../pages/Welcome'
import Footer from '../components/Footer'

const WebsiteLayout = (props) => {
  return (
    <div>
        <Welcome />
        {props.children}
        <Footer />
    </div>
  )
}

export default WebsiteLayout