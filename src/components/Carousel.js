import React from 'react'
import '../styles/Carousel.css'
import Arrow from '../components/Carousel/Arrow'
import { useState, useEffect } from 'react'

const Carousel = (props) => {

    const range = props.range
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start+range)
    const [intervalId, setIntervalId] = useState()
    const items = props.data
    const interval = props.interval * 1000

    const itemView = (item) => (
        <div className="item" style={{background: `url(${item.url})`}}>
            <div class="p-city">
                <p>{item.title}</p>
            </div>
        </div>
    )

    useEffect(() => {
        let id = setInterval(function () {
            next()
        }, interval)

        setIntervalId(id)

        return () => clearInterval(intervalId);
    }, [start])

    const previous = () => {
        if(start >= range){
            setStart(start-range)
            setEnd(end-range)
        }else{
            setStart(items.length-range)
            setEnd(items.length)
        }
    }

    const next = () => {
        if(start < range+end){
            setStart(start+range)
            setEnd(end+range)
        }
        
        if(end >= 12){
            setStart(0)
            setEnd(range)
        }
    }

return (
        <div className="slider">
            <h2 className="title-carousel">Popular Cities</h2>
            <div className="arrow-container">
            <Arrow click={previous} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>} />
            <div className="container-slides">
            {items.slice(start, end).map(itemView)}
            </div>
            <Arrow click={next} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>} />
            </div>
        </div>
)       
}

export default Carousel