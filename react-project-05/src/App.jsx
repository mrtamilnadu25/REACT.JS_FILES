
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
function App() {
 
  let author="kesavan"
  
  return (
  <>   
  <Header author={author}/>
  <Main/>
  <Footer author="sk"/>
  </>

  )
}

export default App
