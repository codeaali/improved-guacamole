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
        
        
        <div className="items-container">
        {/* <BsFillCartCheckFill /> */}

        <div className=""><p>Total planned: {it['Total Planned Weekly']} </p></div>
        <br />
        <div className=""><p>Total completed: {it['Total Completed Weekly']}</p> </div>
        <br />
        <div className=""><p>Weekly completed: {it['Weekly Completed %']}</p> </div>
        <br />
        <div className=""><p>Total rejected weekly: {it['Total Rejected Weekly']} </p></div>
        <br />
        <div className=""><p>Weekly rejected: {it['Weekly Rejected %']}</p> </div>
        </div>
        </div>)
        
        )}
    </div>

  )
}

export default ItemLister