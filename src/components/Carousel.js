import React from 'react'
import '../styles/Carousel.css'
import Arrow from '../components/Carousel/Arrow'
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';
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
            console.log(start,end)
        }else{
            setStart(items.length-range)
            setEnd(items.length)
        }
    }

    const next = () => {
        if(start < range+end){
            setStart(start+range)
            setEnd(end+range)
            console.log(start, end)
        }
        
        if(end >= 12){
            setStart(0)
            setEnd(range)
        }
    }

return (
        <div className="slider">
            <h2 className="title-carousel">Popular MyTineraries</h2>
            <div className="arrow-container">
            <Arrow icon={<MdNavigateBefore size={25} />} click={previous} />
            <div className="container-slides">
            {items.slice(start, end).map(itemView)}
            </div>
            <Arrow icon={<MdNavigateNext size={25} />} click={next} />
            </div>
        </div>
)       
}

export default Carousel