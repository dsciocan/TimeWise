import React from 'react'
import { useState } from 'react'
// import './App.css'
import SidebarMain from './components/sidebar/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timer from './components/Timer/Timer';
import Calendars from './components/Calendar/Calendar';
import Home from './components/Home/home';
import Notes from './components/Notes/Notes';
import Footer from "./components/Footer";


function App() {


  return (
    <>
    <div className='container-fluid d-flex flex-row justify-content-start'>
      <Router>
      <SidebarMain/>
      <Routes>
        <Route path="/" element={<div className='col-lg-11'><Home /></div>} />
        <Route path="timer" element={<div className='col-lg-11'><Timer /></div>} />
        <Route path="notes" element={<div className='col-lg-11'><Notes /></div>} />
        <Route path="calendar" element={<div className='col-lg-11'><Calendars /></div>} />
      </Routes>
    </Router>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
