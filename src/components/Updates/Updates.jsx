import React from 'react'
import './Updates.css'
import {UpdatesData} from '../../Data/Data'
const Updates = () => {
  return (
   <div className="Updates">
      {UpdatesData.map((item,index)=>{
        return(
            <>
            <div className="update">
                <img src={item.img}/>
                <div className="noti">
                    <div style={{
                        marginBottom:'0.5rem'
                    }}>
                        <span>{item.name}</span>
                        <span> {item.noti}</span>
                    </div>
                    <span>{item.time}</span>
                </div>
            </div>
            </>
        )
      })}
   </div>
  )
}

export default Updates