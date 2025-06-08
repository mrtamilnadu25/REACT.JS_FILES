
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { createContext, useState } from 'react';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Login from './Components/Login';
import Product from './Components/Product';
import About from './Components/About';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Productlist from './Components/Productlist';
import ProductDetails3 from './Components/ProductDetails3';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { BsCartPlusFill } from "react-icons/bs";
import NotFound from "./Components/NotFound"
export let userContext= createContext()
function App() {

  let user2="rasukutty";
  
  let [user,setUser]=useState({
    name:"Kesavan",
    age:23,
    mail:"mrjawadhu@gmail.com"
  })
  
  return (
   
  <div>   
  {/* <Loading/> */}

<Router>
    <ol className='orderlist'>
      <li><Link to="/">Home</Link></li>
      <li><Link to={`Login/${user2}`}>Login</Link></li>
      <li><Link to={"Contacts"}>Contacts</Link></li>
      <li><Link to={"/main"}>Main</Link></li>
      <li><Link to={"/product"}>Product</Link></li>
      <li><Link to={"/about"}>About</Link></li>
      
    </ol>
  <Routes>
  {/* <Main/> */}
    <Route path='/' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contacts' element={<Contacts/>}/>
    <Route path='Login/:user2' element={<Login/>}>
    
   
    </Route>
    <Route path='Product'element={<Product/>}>
    <Route index element={<Productlist/>}/>
      <Route path='list' element={<Productlist/>}/>
    <Route path='details' element={<ProductDetails3/>}/>
    
      </Route>

    <Route path='/main' element={<Main/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
</Router>
  
  </div>
    

  )
}

export default App
