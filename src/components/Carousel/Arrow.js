import React from 'react'
import '../../styles/Arrow.css'

const Arrow = (props) => {
return (
    <button class="button-arrow" onClick={props.click}>
        {props.icon}
    </button>
)
}

export default Arrow