import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header'
import "./style.css"
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Stats from './components/stats/Stats'
import Footer from './components/footer/Footer';
import FeedHeader from './components/feedHeader/FeedHeader'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedHeader />
  </StrictMode>,
)
