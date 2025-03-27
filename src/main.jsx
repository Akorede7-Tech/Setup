import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/Body/Body.css'
import App from './components/Body/Body.jsx'
import './components/Body/Body.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
