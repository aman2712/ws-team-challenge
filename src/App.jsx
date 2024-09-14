import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main'
import Single from './pages/Single'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/single' element={<Single/>} />
      </Routes>
    </>
  )
}

export default App
