import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </>
  )
}

export default App
