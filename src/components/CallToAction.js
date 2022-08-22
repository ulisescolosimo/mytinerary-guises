import React from 'react'

const CallToAction = (props) => {
  return (
    <a href="#" className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">{props.title}</span>
    </a>
  )
}

export default CallToAction