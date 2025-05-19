import React, { useState } from "react";
import styled from "styled-components";


const CounterApp = () => {
  let[count, setCounts] = useState(0)

  
  
  
  function handleIncrease(){
  setCounts((prevcount)=>prevcount+1);
  setCounts((prevcount)=>prevcount+1);
  setCounts((prevcount)=>prevcount+1);
}
function handleDecrease(){
  
  setCounts((prevcount)=>{return prevcount-1});
  setCounts((prevcount)=>{return prevcount-1});
  setCounts((prevcount)=>{return prevcount-1});
  
}
let [sample1,setSample]=useState(()=>{return hfun()})
  function hfun(){
    // console.log(fh());
    
    return 100
  }
  return( 
  
  <div>
     
      <h1>click to unlock reward 🌺</h1>
      <button onClick={handleIncrease} style={{
        backgroundColor:"gray",
        width:"100px",
        height:"30px",
        // display:"flex"
      }} className="btn">Increase</button>
      

  </div>
  
)
};

export default CounterApp;
