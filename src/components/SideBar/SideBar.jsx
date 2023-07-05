import React from 'react'
import './SideBar.css'
import logo from '../../imgs/logo.png'
import {sideBarData} from '../../Data/Data'
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { useState } from 'react';
const SideBar = () => {
    const [selected,setSelected] = useState(0)
  return (
    <>
    <div className='sideBar'>
    <div className="logo">
        <img src={logo} alt='logo' />
        <span>Sh<span>o</span>ps</span>
    </div>
    <div className="menu">
        {sideBarData.map((item,index)=>{
            return(
                <div className={selected===index?"menuItem active":"menuItem"} 
                onClick={()=>setSelected(index)}
                key={index}>
                    <div>
                        <item.icon/>
                    </div>
                    <span>{item.heading}</span>
                </div>
            )
        })}
         <div className="menuItem">
                    <div>
                        <UilSignOutAlt/>
                    </div>
                </div>
    </div>
    </div>
    </>
    
  )
}

export default SideBar