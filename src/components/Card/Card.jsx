import React from 'react'
import { useState } from 'react'
import { motion} from 'framer-motion';
import { CircularProgressbar } from "react-circular-progressbar";
import { UilTimes } from "@iconscout/react-unicons";
import "react-circular-progressbar/dist/styles.css";
import Chart from "react-apexcharts";
import './Card.css'
const Card = (props) => {
  const [expanded,setExpanded] = useState(false)
  return (
   <>
   {/* <motion.div: provide some extra frame when it is expand and collapse */}
   <motion.div layout>
        {expanded ? <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
         :
         <CompactCard param={props} setExpanded={()=>setExpanded(true)} />}
      </motion.div>
   </>
  )
}

//compact card
function CompactCard({param,setExpanded}){
  const Png = param.png
  return(
   <dev className='CompactCard'
    style={{
      background:param.color.backGround,
      boxShadow:param.color.boxShadow
      
    }}
    
    onClick={setExpanded}
   >
    <div className='radialBar'>
    <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
    </div>
    <div className='detail'>
      <Png/>
      <span>${param.value}</span>
      <span>Last 24 hours</span>
    </div>
   </dev>
  )
}

//ExpandedCard
function ExpandedCard({param,setExpanded}){
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#000"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return(
   <div className='ExpandedCard'
   style={{
    background:param.color.backGround,
    boxShadow:param.color.boxShadow
  }}
   >
    <div
    style={{
      alignSelf: "flex-end",
      cursor: "pointer",
      color: "white"
    }}
    >
    <UilTimes onClick={setExpanded}/>
    </div>
    <span>{param.title}</span>
    <div className='chartContainer'>
    <Chart  series={param.series} type={param.type} options={data.options} />
    </div>
    <span>Last 24 hours</span>
   </div>
  )
}

export default Card