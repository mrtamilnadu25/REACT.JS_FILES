import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Loading from "./Loading"
import { Link, Route ,BrowserRouter as Router ,Routes, useNavigate } from "react-router-dom";
import useFetch from "./custom-hook/useFetch";
import Product from "./Product";
import axios from "axios";
import Swal from 'sweetalert2'
import { FaCartArrowDown } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {useDispatch,useSelector} from "react-redux"
import {addItem} from "../store/cartSlice"
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

const Productlist = () => {
 let navigate= useNavigate()
 
 
let {products,isLoading,error,setProducts}=useFetch("http://localhost:4000/products")
// console.log(products,isLoading,error);

let handleDelete=(id)=>{
  axios.delete(`http://localhost:4000/products/${id}`)
  .then(()=>{
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });
  }
});
  })
  let addToCartItem=products.filter(product=>product.id !== id)
  setProducts(addToCartItem)
}     
let dispatch=useDispatch()
let cartState=useSelector((state)=>{return state.cart})
let addToCartItem=(product)=>{
  let checkedProduct = cartState.some(cartProduct=>cartProduct.id===product.id); 
    console.log(checkedProduct);
  if(!checkedProduct){

    dispatch(addItem(product))
    Swal.fire({
      title:"success",
      text:"Product Added Succesfully",
      icon:"success"
    })
  }  
  else{
    Swal.fire({
      title:"Oops!",
      text:"Product Already Added",
      icon:"error",
      footer:"<p> Add Some Other Product</p>"
    })
    
  }
}

 if(isLoading){     
  return (<div className="sharinganLoader">
    <Loading/>
   <h1>Loading...</h1>
  </div>)
 }
 else{
   return (
   <div>
    <section style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      margin:"auto 5% "
    }}>
    <h1>Product List</h1>
    <article>
      <span>Create New Product : </span>
      <Link to="/newproduct">Click me!</Link>
    </article>

    </section>
    


     {products.length !==0 &&(

         <section className="hole0">
     {/* <h4>Product List</h4> */}
     {
       products.map(product=>(
        <section className="hole" key={product.id}>
         <div>
           <h6>Title : {product.title}</h6>
         </div>
         <div className="imgstyle">
              
           <img src={product.image} alt="..."  className="setImg"/>
         </div>
         <div className="setalign">
           <div className="titles">
            <h6>Category : {product.category}</h6>
            <h6>Price : {product.price}</h6>
            <h6>Rating : {product.rating.rate}</h6>
            <h6>count : {product.rating.count}</h6>
           </div>
 
            <p className="description">Description : {product.description}</p>
         </div>
         <div className="buttonSpace">
           
           
           <button className="btn4" onClick={()=>navigate(`/update/${product.id}`)}><FaEdit style={{color:"green",backgroundColor:'gray', width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}/></button>
           <button className="btn1" onClick={()=>addToCartItem(product)}><FaCartArrowDown style={{color:"orange",backgroundColor:'gray', width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}/>
</button>
           <button className="btn3" onClick={()=>handleDelete(product.id)}><MdDelete style={{color:"green",backgroundColor:'gray', width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}/></button>
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