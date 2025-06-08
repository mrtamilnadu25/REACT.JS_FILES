import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Loading from "./Loading"
import { Route ,BrowserRouter as Router ,Routes } from "react-router-dom";

const Productlist = () => {
  let [products,setProducts]=useState([])
  let [error,setError]=useState("")
  let [isLoading,setIsLoading]=useState(true)
 let fetched= useEffect(()=>{
  fetch("http://localhost:4000/products",{method:"GET"})
  .then((res)=>{
  if(res.ok){
    return res.json()
    
  }
  else{
    throw new Error("search proper data")
  }
    
  })
.then((data)=>{setProducts(data);

})
.catch((error)=>{
   setError(error.message);
   
})
.finally(()=>{
  setIsLoading(false)
})
 },[])

//  {
//     "_id": 1,
//     "title": "Long sleeve Jacket",
//     "isNew": true,
//     "oldPrice": "200",
//     "price": 150,
//     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//     "category": "women",
//     "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "rating": 4,
//     "id": "9b83"
//   }
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
