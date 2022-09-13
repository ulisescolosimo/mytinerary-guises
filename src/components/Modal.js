import React from 'react'
import '../styles/Modal.css'

const Modal = ({modal, setModal}) => {

    console.log(modal)

    return (
            <>
                <button onClick={setModal(false)}>X</button>
            </>
    )
}

export default Modal