import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
// import {Provider} from "redux"
import {Provider} from "react-redux"
import { store } from "./store/Store.js"



// let user = "kesavan"


createRoot(document.getElementById('root')).render(
  
  // <StrictMode>
   
 <Provider store={store}>
    <App/>

 </Provider>

 
 
    
  // </StrictMode>
)
