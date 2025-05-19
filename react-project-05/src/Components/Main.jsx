import React from "react";
import styled from "styled-components";

let Button =styled.button

`
background-color:blue;
width:100px;
height:50px;
border-outline:none;
color:white;



`
let NewButton = styled(Button)
`
background-color:yellow;
box-shadow:10px 10px 5px gray;
`
let NewButton1=styled(Button)
`
background-color:orange;
`
const Main = () => {
  let MainStyle={
   backgroundColor:"red",
   color:"white",
   boxShadow:"10px 5px 5px black",
   width:"200px",
   height:"24px",
   display:"flex",
   alignItem:"center",
   justifyContent:"center",


  }
let user="S.K7"
  
  function prints(e){
    console.log(e.target.innerText);

    
    console.log("dai");
    user="Rasukutty"
    console.log(user);
    
    
  }
  function prints1(user){
    console.log(user.target.innerText);
    console.log("hellow world");
    
    user="Rajavel"
    console.log(user);
    
  }

  function prints2(events){
    console.log(events.target.innerText);
    console.log("world");
    user="Thatha"
    console.log(user);
    
    
    
  }


  
  return <main>

    <h3 style={MainStyle}>Main Content-{user}</h3>
    <Button onClick={prints}>Click Me!</Button>
    <NewButton onClick={(e)=>{prints1(e)}}>Dublicate</NewButton>
    <NewButton1 onClick={(e)=>{prints1(e)}}>Dublicate2</NewButton1>

  </main>;
};

export default Main;



 