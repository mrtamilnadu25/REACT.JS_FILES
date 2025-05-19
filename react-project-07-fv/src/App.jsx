
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Loading from './Components/Loading.jsx';
function App() {
 
  let author="kesavan"
  
  return (
  <>   
  <Header author={author}/>
  {/* <Loading/> */}
  <Main/>
  <Footer author="sk"/>
  </>

  )
}

export default App
