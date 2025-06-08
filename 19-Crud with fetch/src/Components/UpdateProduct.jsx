


 import React, { useEffect, useState } from "react";
import {Button, Grid, Paper, TextField, Typography} from "@mui/material"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import Swal from 'sweetalert2'

const UpdateProduct = () => {
 let paperStyle={
     width:400,
     margin:"20px auto",
     padding :'20px'
   }
  /* {
     "_id": 1,
     "title": "Long sleeve Jacket",
     "isNew": true,
     "oldPrice": "200",
     "price": 150,
     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
     "category": "women",
     "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
      "rating":{
       "rate": 5,
     "count":180
     }  
   } */  
  let [updateProduct,setUpdateProduct]=useState(null);
  let navigate= useNavigate()
  let {id}=useParams()
  useEffect(()=>{
    axios(`http://localhost:4000/products/${id}`)
    .then(res=>setUpdateProduct(res.data)
    )
  },[])
  
 
  let handleChanged=(e)=>{
  let {value,name}=e.target
  let fieldName=name.split("rating.")[1]
 
  if(name.includes("rating.")){
   setUpdateProduct({
     ...updateProduct,
     rating:{
       ...updateProduct.rating,
       [fieldName] :value
     } 
   })
 
  }
  else{
    setUpdateProduct({
     ...updateProduct,
     [name]: value
     
   })
 
  }
 
 
 }
 
 
 let handleUpdate=(event)=>{
    event.preventDefault()
 
    fetch(`http://localhost:4000/products/${id}`,{
     method:"PUT",
     headers:{
       "content-type":"application/json"
     },
     body: JSON.stringify(updateProduct) 
    })
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
  confirmButtonText: "Yes, updated it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire({
      title: "Updated!",
      text: "Your file has been updated.",
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
  navigate("/product")
}

);
    })
 }
 if(updateProduct!==null){

   return (
   <div>
     <Paper elevation={20} style={paperStyle}>
       <Typography variant="h5" textAlign="center" >
         {""}
          Update Product {""}
 
       </Typography>
        <Grid component="form" style={{display:"grid",gap:"20px"}} onSubmit={handleUpdate}>
           <TextField value={updateProduct.title} name="title" label="title" variant="outlined" fullWidth onChange={handleChanged}/>
         
        
           <TextField value={updateProduct.category} name="category" label="category" variant="outlined" fullWidth onChange={handleChanged}/>
        
         <Grid container spacing={2}>
              <Grid size={6}>
                     <TextField value={updateProduct.rating.rate} name="rating.rate"type="number" label="Rate" variant="outlined" onChange={handleChanged}/>
              </Grid>
              <Grid size={6}>
                     <TextField value={updateProduct.rating.count}  name="rating.count"type="number" label=" Count" variant="outlined" onChange={handleChanged}/>
              </Grid>
             
         </Grid>
        <Button type="submit" variant="outlined" color="save" fullWidth>Save</Button>
      </Grid> 
     </Paper>
     
   </div>
     )
 }
 else{
  <div><Loading/>loading...</div>
 }
 


};

export default UpdateProduct;
