import React from 'react'
import {cardsData} from '../../Data/Data'
import Card from '../Card/Card'

const Cards = () => {
  return (
   <>
   <div className="Cards">
    {cardsData.map((item,index)=>{
            return(
                <>
                <div className="parentContainer">
                    <Card
                    title={item.title}
                    color={item.color}
                    barValue={item.barValue}
                    value={item.value}
                    png= {item.png}
                    series={item.series}
                    />
                </div>
                </>
            )
    })}
   </div>
   </>
  )
}

export default Cards