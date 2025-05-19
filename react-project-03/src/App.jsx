import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let author="kesavan"
  let islogged = true;
  let newfun="one"
  return (
   <div>
    <h1 style={{backgroundColor:"red",color:"white"}}>react jsx</h1>
   <label htmlFor="">Username:</label>
   <input type="text" />
   <p>{author}</p>
   {
    islogged && <p>welcome to our website</p>
   }
   <button onClick={newfun}>CLICK</button>

   
   </div>

  )
}

export default App
