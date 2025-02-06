import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import LoggedIn from './components/loggedIn/LoggedIn'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoggedIn />
  </StrictMode>,
)
