import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header'
import "./style.css"
import Hero from './components/hero/Hero'
import About from './components/about/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <About />
  </StrictMode>,
)
