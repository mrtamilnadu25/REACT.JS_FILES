import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Loading from "./Loading"
import { Route ,BrowserRouter as Router ,Routes } from "react-router-dom";
import useFetch from "./custom-hook/useFetch";

const Productlist = () => {
  // let [products,setProducts]=useState([])
  // let [error,setError]=useState("")
  // let [isLoading,setIsLoading]=useState(true)
//  let fetched= useEffect(()=>{
//   fetch("http://localhost:4000/products",{method:"GET"})
//   .then((res)=>{
//   if(res.ok){
//     return res.json()
    
//   }
//   else{
//     throw new Error("search proper data")
//   }
    
//   })
// .then((data)=>{setProducts(data);

// })
// .catch((error)=>{
//    setError(error.message);
   
// })
// .finally(()=>{
//   setIsLoading(false)
// })
//  },[])


let {products,isLoading,error}=useFetch("http://localhost:4000/products")
console.log(products,isLoading,error);

 if(isLoading){     
  return (<div className="sharinganLoader">
    <Loading/>
   <h1>Loading...</h1>
  </div>)
 }
 else{
   return (
   <div>
    <h1>Product List</h1>


     {products.length !==0 &&(

        <section className="hole0">
     {/* <h4>Product List</h4> */}
     {
       products.map(products=>(
        <section className="hole" key={products.id}>
         <div>
           <h6>Title : {products.title}</h6>
         </div>
         <div className="imgstyle">
              
           <img src={products.image} alt="..."  className="setImg"/>
         </div>
         <div className="setalign">
           <div className="titles">
            <h6>Category : {products.category}</h6>
            <h6>Price : {products.price}</h6>
            <h6>Rating : {products.rating}</h6>
           </div>
 
            <p className="description">Description : {products.description}</p>
         </div>
         <div className="buttonSpace">
           
           <button className="btn1">Addtocart</button>
           <button className="btn2">Buy now</button>
           <button className="btn3">Delete</button>
           <button className="btn4">Cart</button>
         </div>
        
        </section> 
       ))
     }
   </section>

     )


     }
     {
      error && <p>{error}</p> 
     }

   </div>
      
     
   )

 }
};

export default Productlist;
