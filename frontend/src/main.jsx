import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import Feed from './components/feed/Feed'
import ViewProfile from './components/viewProfile/ViewProfile'
import FeedHeader from './components/feedHeader/FeedHeader'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedHeader />
    <Feed />
  </StrictMode>,
)
