import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Comments.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Comments = () => {

    const { id } = useParams()

    const [itineraries, setItineraries] = useState()

    useEffect(() => {
        async function getResults() {
        const results = await axios(`http://localhost:4000/itineraries/?city=${id}`);
        setItineraries(results.data.response)
        }
        getResults()
    },[])

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <div className="container-comments" style={{ transition: "all 0.5s ease-out", transitionDuration: "500ms"  }}>
        {open ? <div className="chat-container" style={{ transition: "all 0.5s ease-out", transitionDuration: "500ms"  }}>
            {itineraries.map(( item => 
                <div className="bg-black" style={{ transition: "all 0.5s ease-out", transitionDuration: "500ms" }}>
                    <h2>City: {item.city.city}</h2>
                </div>
                ))}
        </div> : null}
        <button className="see-more" style={{ transition: "all 0.5s ease-out", transitionDuration: "500ms"  }} onClick={handleClick}>{open ? "See less" : "See more!" }</button>
    </div>
  )
}

export default Comments