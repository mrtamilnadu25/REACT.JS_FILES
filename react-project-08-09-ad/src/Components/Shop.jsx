import React, { useState } from "react";
import ProductItem from "./ProductItem"


const Shop = () => {
  let [product,setProduct]=useState({
    Mobile:"Iphone 12",
    Price:50000,
    Description:"Iphone 12 with 128Gb storage Add then best Optimized Mobile in the year"
  })
  
  
  return (
  
  
  <main className="Main">
     <h1>Welcome to my shop</h1>
     <ProductItem product={product}/>
  </main>
  );
};

export default Shop;



 