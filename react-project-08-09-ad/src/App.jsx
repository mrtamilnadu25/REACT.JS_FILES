
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { createContext, useState } from 'react';
// import Loading from './Components/Loading';
export let userContext= createContext()
function App() {
 
  let [user,setUser]=useState({
    name:"Kesavan",
    age:23,
    mail:"mrjawadhu@gmail.com"
  })
  
  
  return (
    <userContext.Provider value={{user}}>

  <div>   
  <Header/>
  {/* <Loading/> */}
  <Main/>
  <Footer/>
  </div>
    </userContext.Provider>

  )
}

export default App
