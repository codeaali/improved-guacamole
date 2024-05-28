import React, { useState } from 'react'
import './tracklist.css'
import { BsFillCartCheckFill, BsCartDash } from "react-icons/bs";

function TrackList(props) {
  const {prodData, salesData, min, max} = props;
  
    console.log('tracklist',prodData);
    console.log('tracklist', salesData);
  return (
    <div className='tracklist-container'>
        {prodData.length > 0 && <p><b>Work Order</b></p>}
        {/* work order */}
        { prodData.length > 0 && prodData.map((it,index)=>
        ((index >= min && index < max) && <div className="targets">
        
        <br />
        <div className="targets-container">
        <BsFillCartCheckFill />

        <div className="client"><p>WO {it['Document Internal ID']} </p></div>
        <br />
        <br />
        <div className="quantity"><p> of Item {it['Item No.']}</p> </div>
        <br />
        <div className="quantity"><p> - Quantity: {it['Quantity']}</p> </div>
        </div>
        </div>)
        
        )}
        
        {/* sale order */}
       {salesData.length > 0 &&  <p><b>Sale Order</b></p>}
        {salesData && salesData.map((it,index)=>
        ((index >= min && index < max) && <div className="deliveries">
          
        <br />
        <div className="deliveries-container">
        <div><BsCartDash /></div>
        <br />
        <div className="client"> <p> SO {it['Document Number']} - </p></div>
        <br />
        <br />
        {/* shows only first 30 characters Customer/Vendor Name*/}
        <div className="quantity"><p>{it['Customer/Vendor Name'].substring(0,30)}</p></div>
        </div>
        </div>))}

        {/* rejection */}
        
        {/* {data.map((it)=>
        (<div className="rejections">
        
        <br />
        <div className="rejections-container">
        <div className="client"> {}</div>
        <br />
        <br />
        <div className="quantity"> {}</div>
        </div>
        </div>))} */}
    </div>
  )
}

export default TrackList