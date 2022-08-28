import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const WebsiteLayout = (props) => {
  return (
    <>
        <Header />
        {props.children}
        <Footer />
    </>
  )
}

export default WebsiteLayout