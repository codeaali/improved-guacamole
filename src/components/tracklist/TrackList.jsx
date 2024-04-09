import React, { useState } from 'react'
import './tracklist.css'

function TrackList(props) {
  const {prodData, salesData} = props;
  const [limitter, setLimitter] = useState(true)
    console.log('tracklist',prodData);
    console.log('tracklist', salesData);
  return (
    <div className='tracklist-container'>
        {prodData.length > 0 && <p><b>Work Order</b></p>}
        {/* work order */}
        { prodData.length > 0 && prodData.map((it,index)=>
        ((limitter ? index <= 10 : index >=0 ) && <div className="targets">
        
        <br />
        <div className="targets-container">
        <div className="client">{it['Document Internal ID']} </div>
        <br />
        <br />
        <div className="quantity">{it['Item No.']} </div>
        <br />
        <div className="quantity">{it['Quantity']} </div>
        </div>
        </div>)
        
        )}
        {prodData.length > 0 && <button onClick={()=>setLimitter(false)}>show more ...</button>}
        
        {/* sale order */}
        <p><b>Sale Order</b></p>
        {salesData && salesData.map((it)=>
        (<div className="deliveries">
        
        <br />
        <div className="deliveries-container">
        <div className="client"> {it['Document Number']}</div>
        <br />
        <br />
        <div className="quantity"> {it['Customer/Vendor Name']}</div>
        </div>
        </div>))}

        {/* rejection */}
        <p><b>Rejection</b></p>
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