import React,{useState} from "react";

const Product = () => {
  let [count,setCount]=useState(0)
  return (
  <div>
    <h1>Counts-{count}</h1>
    <button onClick={()=>setCount(count++)}>Submit</button>
  </div>)
};

export default Product;
