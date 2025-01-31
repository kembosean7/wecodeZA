import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"

import Write from './components/write/Write'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Feed />
  </StrictMode>,
)
