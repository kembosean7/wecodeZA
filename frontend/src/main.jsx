import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import Feed from './components/feed/Feed'
import ViewProfile from './components/viewProfile/ViewProfile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViewProfile />
  </StrictMode>,
)
