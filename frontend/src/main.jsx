import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header' 
import "./style.css"
// import Login from './components/login/login'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Stats from './components/stats/Stats'
import Footer from './components/footer/Footer';
import FeedHeader from './components/feedHeader/FeedHeader'
import Feed from './components/feed/Feed'
import PostHome from './components/postHome/PostHome'
import Write from './components/write/Write'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Feed />
  </StrictMode>,
)
