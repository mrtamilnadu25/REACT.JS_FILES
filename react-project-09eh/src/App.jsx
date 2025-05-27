
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { useContext } from 'react';
import { createContext } from 'react';

// import Loading from './Components/Loading.jsx';
import { createContext, useContext, useState } from 'react';
export let userss=useContext(createContext)


function App() {
  let [users,setusers]=useState({
    name:"Kesavan",
    mail:"mrjawadhu@gmail.com"

  })
  
  return (

<userss.provider>
  <div>   
  <Header/>
  {/* <Loading/> */}
  <Main/>
  <Footer/>
  </div>
</userss.provider>



  )
}

export default App
