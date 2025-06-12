import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contacts from "./Components/Contacts"
import Services from "./Components/Services"
import NavBar from "./Components/NavBar"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Product from "./Components/Product"
import NotFound from './NotFound'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Router>
   <NavBar/>
      <Routes>
        
        
       
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/navbar' element={<NavBar/>}/> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App
