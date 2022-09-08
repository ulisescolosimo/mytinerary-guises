import React from 'react'
import { useState } from 'react'
import '../styles/Comments.css'
import { useParams } from 'react-router-dom'
import { useGetItinerariesCityQuery } from '../features/itineraryAPI'

const Comments = () => {

    const { id } = useParams()

    const { data: itineraries } = useGetItinerariesCityQuery(id)
    
    let itis = itineraries?.response

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <div className="container-comments">
        {open ? <div className="chat-container" >
                <div className="chat-msg">
                    <p className="chat-p">Ulises: Great city!</p>
                    <p className="chat-p">Guido: I like the city but too warm!</p>
                    <p className="chat-p">Roberto: i love the weather, i dont need the beach lol</p>
                </div>
        </div> : null}
        <button className="see-more" onClick={handleClick}>{open ? "See less" : "See more!" }</button>
    </div>
  )
}

export default Comments