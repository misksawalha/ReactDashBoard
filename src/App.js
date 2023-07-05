import React from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar';
import MainDash from './components/MainDash/MainDash';
function App() {
  return (
    <div className='App'>
       <div className='AppClass'>
        <SideBar/>
        <MainDash/>
       </div>
    </div>
  )
}

export default App