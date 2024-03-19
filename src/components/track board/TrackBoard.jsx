import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import './trackboard.css'

function TrackBoard() {
    const [data,setData] = useState({});
    
    useEffect(()=>{
        window.alert('data fetching......');
    fetch('http://localhost:3000/data')
    .then(res => res.json())
    .then(json => setData(json))
    },[])

   
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
            <div className="day"><p>weekly total</p></div>
            
        </div>
        <div className="main-container">
            <div className="section1">
                
                { data && data?.targets && data.targets.map((o)=>{
                    return (<div className="targets">
                        <p><b>Target</b></p>
                        <br />
                        <div className="client"> {o.client}</div>
                        <br />
                        <br />
                        <div className="quantity"> {o.quantity}</div>
                    </div>)
                })}
            </div>
            <div className="section2">
            { data && data?.deliveries && data.deliveries.map((o)=>{
                    return (<div className="deliveries">
                        <p><b>Deliveries</b></p>
                        <br />
                        <div className="client"> {o.client}</div>
                        <br />
                        <br />
                        <div className="quantity"> {o.quantity}</div>
                    </div>)
                })}
                
            </div>
            <div className="section3">
                
                { data && data?.rejection && data.rejection.map((o)=>{
                    return (<div className="rejections">
                        <p><b>Rejection</b></p>
                        <br />
                        <div className="client">{o.client}</div>
                        <br />
                        <br />
                        <div className="quantity"> {o.quantity}</div>
                    </div>)
                })}
            </div>
        </div>
        </div>
    </div>
  )
}

export default TrackBoard