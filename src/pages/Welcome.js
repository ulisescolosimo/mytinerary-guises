import React from 'react'
import CallToAction from '../components/CallToAction'
import '../styles/Welcome.css'

const Welcome = () => {
return (
    <div className="main-container">
            <video src="./assets/video.mp4" autoPlay loop playsInline muted />
            <div className="pane-container">
                <div className="panes">
                <div className="pane">M</div>
                <div className="pane padding-title">Y</div>
                <div className="pane">T</div>
                <div className="pane">I</div>
                <div className="pane">N</div>
                <div className="pane">E</div>
                <div className="pane">R</div>
                <div className="pane">A</div>
                <div className="pane">R</div>
                <div className="pane">Y</div>
                </div>
                <CallToAction title="Start trip!" />
            </div>
        </div>
)
}

export default Welcome