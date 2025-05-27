import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Loading from './Components/Loading.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Loading/>
    <App/>
  </StrictMode>
)
