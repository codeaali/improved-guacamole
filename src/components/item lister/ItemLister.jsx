import React from 'react'
import './itemLister.css'
import './tracklist.css'

function ItemLister(props) {
    const {weeklydata} = props;
  return (
    <div>
        {weeklydata.length > 0 && <p><b>Weekly Production</b></p>}
        { weeklydata.length > 0 && weeklydata.map((it,index)=>
        ( <div className="items">
        
        <br />
        <div className="items-container">
        {/* <BsFillCartCheckFill /> */}

        <div className=""><p>{it['Weekly Completed %']} </p></div>
        <br />
        <br />
        <div className=""><p>{it['Total Rejected Weekly']}</p> </div>
        <br />
        <div className=""><p>{it['Weekly Rejected %']}</p> </div>
        </div>
        </div>)
        
        )}
    </div>
  )
}

export default ItemLister