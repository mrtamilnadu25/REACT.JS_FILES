
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import react,{useState}  from "react";
import react,{ createContext } from "react";


function App() {
 let [user , setUser]=useState(
  {
    userName : "Kesavan",
    age:22,
    Gmail :  "mrjawadhu@gmail.com"

  }
 )
 let userContext=createContext()

  return (
    <userContext.provider value={{user}}>
  <div>   
  <Header/>
  {/* <Loading/> */}
  <Main/>
  <Footer/>
  </div>

    </userContext.provider>

  )
}

export default App
