import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import Profiiles from './components/profile/Profiiles'
import FeedHeader from './components/feedHeader/FeedHeader'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedHeader />
    <Profiiles />
  </StrictMode>,
)
