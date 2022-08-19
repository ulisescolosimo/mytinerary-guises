import React from 'react'
import '../styles/Carousel.css'

const Carousel = (props) => {

    const range = props.range
    const start = 0
    const end = start + range
    const items = props.data

    const itemView = (item) => (
        <div className="item" style={{background: `url(${item.url})` 
        , height: '300px', width: '600px', backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: 'center'}}>
            <div class="p-city">
                <p>{item.title}</p>
            </div>
        </div>
    )

return (
        <div className="slider">
            <h2 className="title-carousel">Popular MYtineraries</h2>
            <div className="container-slides">
            {items.slice(start, end).map(itemView)}
            </div>
        </div>
)       
}

export default Carousel