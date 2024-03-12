import React from 'react'
import logo from '../../assets/images/logo.jpg'
import './trackboard.css'

function TrackBoard() {
  return (
    <div>
        <div className="trackboard-wrapper">
        <header>
            <img src={logo} alt="" className='logo'/>
        </header>
        <div className="date-strip">
            <div className="day"><p>Monday</p></div>
            <div className="day"><p>Tueday</p></div>
            <div className="day"><p>Wednesday</p></div>
            <div className="day"><p>Thursday</p></div>
            <div className="day"><p>Friday</p></div>
            <div className="day"><p>Satday</p></div>
            <div className="day"><p>Sunday</p></div>
        </div>
        <div className="main-container">
            <div className="section1">
                <div className="targets">Target</div>
                <div className="targets">Target</div>
                <div className="targets">Target</div>
                <div className="targets">Target</div>
                <div className="targets">Target</div>
                <div className="targets">Target</div>
                <div className="targets">Target</div>
            </div>
            <div className="section2">
                <div className="deliveries">Deliveries</div>
                <div className="deliveries">Deliveries</div>
                <div className="deliveries">Deliveries</div>
                <div className="deliveries">Deliveries</div>
                <div className="deliveries">Deliveries</div>
                <div className="deliveries">Deliveries</div>
                <div className="deliveries">Deliveries</div>
            </div>
            <div className="section3">
                <div className="rejections">Rejections</div>
                <div className="rejections">Rejections</div>
                <div className="rejections">Rejections</div>
                <div className="rejections">Rejections</div>
                <div className="rejections">Rejections</div>
                <div className="rejections">Rejections</div>
                <div className="rejections">Rejections</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TrackBoard