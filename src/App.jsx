import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { SecondPage } from './pages/SecondPage'
import { useDispatch, useSelector } from 'react-redux'
import { HomePage } from './pages/HomePage'
import { NotFound } from './pages/NotFound'
import { Breadcrumb } from 'react-bootstrap'

function App() {
 


  return (
    <>
    <div className='headhome'>
        <h1>Music playlist</h1>
      </div>
        <header>
        <div className="breadcrumb">
          <Link className="breadcrumb-item" to='/'>Home</Link>
          <Link className="breadcrumb-item" to='/SecondPage'>Second page</Link>
          </div>
        </header>
    
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/SecondPage' element={<SecondPage />} />
      <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
