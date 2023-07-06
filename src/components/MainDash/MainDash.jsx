import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Tables from '../Table/Table'
const MainDash = () => {
  return (
    <>
    <div className='mainDash'>
    <h1>Dashboard</h1>
    <Cards/>
    <Tables/>
    </div>
    </>
  )
}

export default MainDash