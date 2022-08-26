import React from 'react'
import CallToAction from './CallToAction'
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
                <div className="slogan-container">
                    <p style={{color: 'white', fontSize: '25px', padding: '10px'}}>No matter where in the world you want to go, we can help get you there.</p>
                </div>
                <CallToAction title="Start trip!" to='/cities' />
            </div>
        </div>
)
}

export default Welcome