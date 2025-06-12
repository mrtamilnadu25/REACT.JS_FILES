import React, { useState } from "react";
import {Paper,TextField, Typography,Button} from "@mui/material"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup" ;
let renderCount=0;

 let schema= yup.object().shape({
  name : yup.string().required("Name Is Required").matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter your full name"),
  email:yup.string().email().required("enter valid email").matches(/^[a-z]+@[a-z]{2,6}.[a-z]{3,5}$/),  
  age:yup.number().integer().required("enter your age").min(18,"enter age between 18 to 30").max(30,"enter age between 18 to 30"),
  password:yup.string().required("password is required"),
  cPassword:yup.string().oneOf([yup.ref ("password"),null], "password must match")
})   

const Contacts = () => {
  let paperStyle={
    width:400,
    margin :"20px auto",
    padding:"20px",
    display:"grid",
    gap:"20px"
  }
  renderCount++;
  let handleData=(data )=>{
    handleSubmit(handleData)
    
  }

  let [input,setInput]=useState("");

  let {register, handleSubmit ,formState:{errors}} =useForm({
    resolver :yupResolver(schema)
  })
  // console.log(errors);
  
  return (
   <Paper elevation={20} style={paperStyle} component="form" onSubmit={handleSubmit(handleData)}>
     <Typography variant="h5" textAlign="center">Create Acount-{renderCount}</Typography>
    <TextField label="Name" {...register("name")} error={!!errors.name} helperText={errors.name?.message}/>
    <TextField label="Email" {...register("email")} error={!!errors.email} helperText={errors.email?.message}/>
    <TextField label="Age" {...register("age")} error={!!errors.age} helperText={errors.age?.message}/>
    <TextField label="Password" {...register("password") } error={!!errors.password} helperText={errors.password?.message}/>
    <TextField label="Confirm Password" {...register("cPassword")} error={!!errors.cPassword} helperText={errors.cPassword?.message}/>
    <Button variant="contained" type="submit">SignUp</Button>
   </Paper> 
  )
}

export default Contacts;
