import React from 'react'
import '../styles/Carousel.css'

const Carousel = (props) => {

    const range = props.range
    const start = 0
    const end = start + range
    const items = props.data

    const itemView = (item) => (
        <div className="item">
            <img src={item.url} style={{width: '500px', height: '355px'}} alt="imagen" />
            <p>{item.title}</p>
        </div>
    )

return (
    <div>
        <div className="slider">
            {items.slice(start, end).map(itemView)}
        </div>
    </div>
)
}

export default Carousel