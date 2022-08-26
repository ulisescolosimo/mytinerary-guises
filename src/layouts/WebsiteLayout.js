import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const WebsiteLayout = (props) => {
  return (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
  )
}

export default WebsiteLayout