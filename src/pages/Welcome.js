import React from 'react'
import '../styles/Welcome.css'
import videoBg from '../assets/videoBack.mp4'

const Welcome = () => {
return (
    <div className="main-container">
            <video src={videoBg} autoPlay loop playsInline muted />
            <div className="pane-container">
                <div>
                <div className="pane">M</div>
                <div className="pane">Y</div>
                <div className="pane padding-title">T</div>
                <div className="pane">I</div>
                <div className="pane">N</div>
                <div className="pane">E</div>
                <div className="pane">R</div>
                <div className="pane">A</div>
                <div className="pane">R</div>
                <div className="pane">Y</div>
                </div>
                <button className="learn-more">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Start trip!</span>
            </button>
            </div>
        </div>
)
}

export default Welcome