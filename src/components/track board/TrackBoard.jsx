import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import './trackboard.css'
import { FaCartShopping } from "react-icons/fa6";
import TrackList from '../tracklist/TrackList';
import { MyContext } from '../../index.js';


function TrackBoard(props) {
    const [data, setData] = useState({});
    const { prodData, setProdData, salesData, setSalesData } = useContext(MyContext);

    // useEffect(() => {
    //     window.alert('data fetching......');
    //     fetch('http://localhost:3000/data')
    //         .then(res => res.json())
    //         .then(json => setData(json))
    // }, [])


    return (
        <div>
            <div className="trackboard-wrapper">
                <header>
                    <img src={logo} alt="" className='logo' />
                </header>
                {/* <div className="date-strip">
            <div className="day"><p>Monday</p></div>
            <div className="day"><p>Tueday</p></div>
            <div className="day"><p>Wednesday</p></div>
            <div className="day"><p>Thursday</p></div>
            <div className="day"><p>Friday</p></div>
            <div className="day"><p>weekly</p></div>
            
        </div> */}
                {/* <div className="main-container">
            <div className="section1">
                
                { data && data?.targets && data.targets.map((o,index)=>{
                    return (index !== 5 ?
                        <div className="targets">
                        <p><b>Work Order</b></p>
                        <br />
                        <div className="targets-container">
                        <div className="client"> {o.document_id}</div>
                        <br />
                        <br />
                        <div className="quantity"> {o.item_no}</div>
                        <div>{o.qty}</div>
                    </div>

                        </div>
                         : 
                    <div className="targets"></div>
                    )
                })}
            </div>
            <div className="section2">
            { data && data?.deliveries && data.deliveries.map((o,index)=>{
                    return (index !== 5 ? 
                        <div className="deliveries">
                            <p><b>Sale Order</b></p>
                            <br />
                            <div className="deliveries-container">
                                <p><FaCartShopping /></p>
                                <div className="client"> {o.client}</div>
                                <br />
                                <br />
                                <div className="quantity"> {o.quantity}</div>
                            </div>
                        </div> : 
                        <div className="deliveries"></div>
                        )
                })}
                
            </div>
            <div className="section3">
                
                { data && data?.rejection && data.rejection.map((o,index)=>{
                    return (index !== 5 ? 
                    <div className="rejections">
                        <p><b>Rejection</b></p>
                        <br />
                        <div className="rejections-container">
                        <div className="client">{o.client}</div>
                        <br />
                        <br />
                        <div className="quantity"> {o.quantity}</div>
                    </div> 
                        </div>
                        : 
                    <div className="rejections"></div>
                    )
                })}
            </div>
        </div> */}
                <div className="day-wrapper">
                    <div className="col monday-col">
                        <p className="day-title">Monday</p>
                        <TrackList 
                        prodData = {prodData}
                        salesData = {salesData}
                        />
                    {console.log('trackboard',prodData)}
                    </div>
                    <div className="col tuesday-col">
                        <p className="day-title">Tuesday</p>
                        <TrackList 
                        prodData = {prodData}
                        salesData = {salesData}
                        />
                    </div>
                    <div className="col wednesday-col">
                        <p className="day-title">Wednesday</p>
                        <TrackList 
                        prodData = {prodData}
                        salesData = {salesData}
                        />
                    </div>
                    <div className="col thursday-col">
                        <p className="day-title">Thursday</p>
                        <TrackList 
                        prodData = {prodData}
                        salesData = {salesData}
                        />
                    </div>
                    <div className="col friday-col">
                        <p className="day-title">Friday</p>
                        <TrackList 
                        prodData = {prodData}
                        salesData = {salesData}
                        />
                    </div>
                    <div className="col weekday-col">
                        <p className="day-title">Weekly</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackBoard