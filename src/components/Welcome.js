import React from 'react'
import '../styles/Welcome.css'

const Welcome = () => {
return (
    <div className="welcome-container">
        <video src="https://cdn.videvo.net/videvo_files/video/free/2017-09/large_watermarked/170804_B_Lombok_090_preview.mp4" autoPlay loop playsInline muted></video>
        <div className="welcome-title-container">
            <div className="pane-container">
                <div className="pane">M</div>
                <div className="pane">Y</div>
                <div className="pane">T</div>
                <div className="pane">I</div>
                <div className="pane">N</div>
                <div className="pane">E</div>
                <div className="pane">R</div>
                <div className="pane">A</div>
                <div className="pane">R</div>
                <div className="pane">Y</div>
            </div>
            <div className='button-container'>
            <button className="learn-more">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Start trip!</span>
            </button>
            </div>
        </div>
        </div>
)
}

export default Welcome