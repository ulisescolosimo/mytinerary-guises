import React from 'react'
import { Link } from "react-router-dom";

const CallToAction = (props) => {
  return (
    <Link to={props.to} className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">{props.title}</span>
    </Link>
  )
}

export default CallToAction