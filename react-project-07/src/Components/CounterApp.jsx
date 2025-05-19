import React, { useState } from "react";
import styled from "styled-components";


const CounterApp = () => {
  let[count, setCounts] = useState(0)

  const [data ,setdata]=useState("Loading")

  
  
  
  function handleIncrease(){
  setCounts((prevcount)=>prevcount+1);
  // setCounts((prevcount)=>prevcount+1);
  // setCounts((prevcount)=>prevcount+1);
}
function handleDecrease(){
  
  setCounts((prevcount)=>{return prevcount-1});
  // setCounts((prevcount)=>{return prevcount-1});
  // setCounts((prevcount)=>{return prevcount-1});
  
}
let [sample1,setSample]=useState(()=>{return hfun()})
  function hfun(){
    // console.log(fh());
    
    return 100
  }
let message;
let remainingClicks=10-count;

if(count<10){
  message =(
    <div>
      <h3>You clicked {count} times</h3>
      <p>Still {remainingClicks}more times to reach a 10% discount🔒</p>
    </div>
  )

}
else if(count===10) {
  message=(
    <div>
    <h3>You clicked {count} times</h3>
    <p>You unlocked a 10% discount🛒</p>
    </div>
  )
}
else if(count<20){
  message=(
    <div>
      <h3>you clicked {count} times</h3>
      <p>you're on the way to get more rewrds! keep click 20% discount🔒</p>
    </div>
  )
}
else{
  message=(
    <div>
      <h3>you clicked {count} times</h3>
      <p>you're reach a top reward! you are a click master❤</p>
    </div>
  )
}
let DataComponent=()=>{
switch(data){
  case "Loading":return <LoadingComponent/>
  case "Succes":return <SuccesComponent/>
  case "Error": return<ErrorComponent/>
}
}
  return( 
  
  <div>
     
      <h1 className="srh">Click To Unlock Rewards💎-{count}</h1>
      <button onClick={handleIncrease} style={{
        backgroundColor:"gray",
        width:"100px",
        height:"30px",
        // display:"flex"
      }} className="btn">Increase</button>
      <button onClick={handleDecrease} style={{
        backgroundColor:"purple",
        width:"100px",
        height:"30px",
        // display:"flex"
      }} className="btn">Decrease</button>

      {/* {
        count>=10 ? ( <p>Your unlocked a 10% discount🛒</p>  ):(<p>Click to 10 times unlock your Reward🔒</p>)
      }
      {
        count>=20 && <p>You're a click master ❤</p>
      }
      {count>=21 && <p>Nice bro Make a some money🤑</p>} */}
{
  message
}
{
DataComponent()
}
  </div>

)
};

export default CounterApp;

function LoadingComponent(){
  return(
    <h4>Loading...</h4>
  )
}
function SuccesComponent(){
  return(
    <h4>
      succes🧡
    </h4>
  )
}
function ErrorComponent(){
  return <h4>Error😴</h4>
}
