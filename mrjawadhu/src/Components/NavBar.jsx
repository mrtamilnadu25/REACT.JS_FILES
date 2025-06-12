import React, { useState } from "react";
import {} from "react-icons"
import {BrowserRouter as Router,Route,Routes ,Link} from "react-router-dom"
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import './NavBar.css'
import { FaHome } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";

const NavBar = () => {
    let [icon,setIcon]=useState(false)
    let handleChange=()=>{
        setIcon(! icon)

    }
    let closeSideDrawer=()=>{
        setIcon(false)
    }
    
  return(

   <>
    <nav className="navbar143">
            <h2 ><Link className="nav-logos">MrJawadhu</Link></h2>
            <div onClick={handleChange} className="menu-icon">
             {
                 icon ? <IoMdClose /> :<MdMenu /> 
             }
            </div>

        <ul className={ icon? 'nav-menu active' : 'nav-menu'}>
            <li ><Link to="/" onClick={closeSideDrawer} className="nav-links">Home</Link></li>
            <li><Link to="/about" onClick={closeSideDrawer} className="nav-links">About</Link></li>
            <li><Link to="/contact" onClick={closeSideDrawer} className="nav-links">Contacts</Link></li>
            <li><Link to="/service" onClick={closeSideDrawer} className="nav-links">Services</Link></li>
            <li><Link to="/product" onClick={closeSideDrawer} className="nav-links">Product</Link></li>
            <li><Link to="/login" onClick={closeSideDrawer} className="nav-links">Login</Link></li>
            <li><Link to="/register" onClick={closeSideDrawer} className="nav-links">Register</Link></li> 
        </ul>
    </nav>
    
   </>
  )
};

export default NavBar;
