import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button"
const Product = () => {
  let [count,setCount]=useState(0)
  let [count1,setCount1]=useState(0)
// useEffect(()=>{
//     console.log("this effect will run after every render");
    
//   })
// useEffect(()=>{
//     console.log("this effect will run only on initial render");
    
//   },[])
 useEffect(()=>{
    console.log("this effect will run only dependency change ");
    
  },[count])
 useEffect(()=>{
    console.log("this effect will run only dependency change"+count1);
    
  },[count1])
  console.log("initial render");
  
  let handleClicked=()=>{
    setCount(count+1)
  }
  return <div>Product-{count}-{count1}
   <Link to="list">list</Link>
   <Link to="details">details</Link>
    <Outlet/>
    <button onClick={handleClicked}>Increase</button>
    <Button variant="secondary" onClick={()=>{setCount1(count1+1)}}>inc2</Button>
  </div>;
};

export default Product;
