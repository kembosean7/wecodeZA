import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import Feed from './components/feed/Feed'
import ViewProfile from './components/viewProfile/ViewProfile'
import Profile from './components/profile/Profile'
import Write from './components/write/Write'
import PostHome from './components/postHome/PostHome'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHome />
  </StrictMode>,
)
