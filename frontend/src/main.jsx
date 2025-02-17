import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import Hero from "./components/hero/Hero"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Login from "./components/login/Login"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Login />
  </StrictMode>,
)
