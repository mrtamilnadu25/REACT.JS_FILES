import React, { useState } from "react";
import {Button, Grid, Paper, TextField, Typography} from "@mui/material"
import Swal from 'sweetalert2'
const NewProduct = () => {

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
 let [newProduct,setNewProduct]=useState({
  
    "title": "",
    "isNew": true,
    "oldPrice": "200",
    "price": 150,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    "category": "",
    "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
     "rating":{
      "rate": 0,
    "count": 0
    }  
 });

 let handleChanged=(e)=>{
 let {value,name}=e.target
 let fieldName=name.split("rating.")[1]

 if(name.includes("rating.")){
  setNewProduct({
    ...newProduct,
    rating:{
      ...newProduct.rating,
      [fieldName] :value
    }
  })

 }
 else{
   setNewProduct({
    ...newProduct,
    [name]: value
    
  })

 }


}


let handleAdd=(event)=>{
   event.preventDefault()

   fetch("http://localhost:4000/products",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(newProduct) 
   })
   .then(()=>{
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, create it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Created!",
      text: "Your has been created new product.",
      icon: "success"
    });
  }
});

    setNewProduct(
      
  {
    "title": "",
    "isNew": true,
    "oldPrice": "200",
    "price": 150,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    "category": "",
    "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
     "rating":{
      "rate": 0,
    "count": 0
    } 
  }
    )
   })
}
  return (
  <div>
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" textAlign="center" >
        {""}
        Create New Product {""}

      </Typography>
       <Grid component="form" style={{display:"grid",gap:"20px"}} onSubmit={handleAdd}>
          <TextField value={newProduct.title} name="title" label="title" variant="outlined" fullWidth onChange={handleChanged}/>
        
       
          <TextField value={newProduct.category} name="category" label="category" variant="outlined" fullWidth onChange={handleChanged}/>
       
        <Grid container spacing={2}>
             <Grid size={6}>
                    <TextField value={newProduct.rating.rate} name="rating.rate"type="number" label="Rate" variant="outlined" onChange={handleChanged}/>
             </Grid>
             <Grid size={6}>
                    <TextField value={newProduct.rating.count}  name="rating.count"type="number" label=" Count" variant="outlined" onChange={handleChanged}/>
             </Grid>
            
        </Grid>
       <Button type="submit" variant="outlined" fullWidth>Add</Button>
     </Grid> 
    </Paper>
    
  </div>
    )
};

export default NewProduct;
