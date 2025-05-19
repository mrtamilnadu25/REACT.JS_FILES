
import './App.css'
import Content from './Components/Content'
import Footer from './Components/Footer'
import  Header  from './Components/Header'
import styled from 'styled-components'

function App() {
 
  let author="kesavan"
  
  return (
  <>   
  <Content author={author}/>
  <Header/>
  <Footer author="sk"/>
  </>

  )
}

export default App
