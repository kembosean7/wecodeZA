import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Router, Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import Login from './components/login/Login';
import Signup from "./components/signup/Signup"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App