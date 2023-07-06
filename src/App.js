import React from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/rigthBar/RightSide';
function App() {
  return (
    <div className='App'>
       <div className='AppClass'>
        <SideBar/>
        <MainDash/>
        <RightSide/>
       </div>
    </div>
  )
}

export default App