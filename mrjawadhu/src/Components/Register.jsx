import {Paper,Typography,TextField,Button} from '@mui/material'
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useMediaQuery} from "react-responsive"
import "./Register.css"

let count =0
const Register = () => {
  // useMediaQuery()

  let schema=yup.object().shape({
    name      : yup.string().required("name is required").matches(/^[A-z][a-z]+ [A-z][a-z]+$/,"enter your fullname"),
    email     :yup.string().email().required("enter your email").matches(/^[a-z0-9]+@[a-z]{3,6}.[a-z]{2,6}$/,"enter valid email"),
    password  :yup.string().required("enter password").matches(/^[A-Za-z0-9]{3,10}$/,"strong password between 3 to 10"),
    cPassword :yup.string().required("enter confirm password").oneOf([yup.ref("password"),null],"password must match"),
    mobileNo  :yup.string().required("enter your mobile number").min(10,"enter your mobile number").max(10,"enter your valid mobile number 10😪")
  });
  let paperStyle={
    width:400,
    height:"auto",
    bacgroundColor:"red",
    display:"grid",
    gap:"20px",
    // marginLeft:"20%",
    // marginTop:"5%",
    // justifyContent:"center",

    
  }
  count++;
  let{register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  })
  let formInputData=(data)=>{
    console.log(data);
  }
  // const isMobile=useMediaQuery({maxWidth:'960px'});
  return (
    <div className='papers' style={{
      // display:"flex",
      // alignItems:"center",
      // justifyContent:"center",
      // marginTop:"5%",
      // width: isMobile ? 300:400,
      
    }}>
     <Paper  elevation={20} style={paperStyle} component="form" onSubmit={handleSubmit(formInputData)} >
      <Typography textAlign="center" variant="h6">
        Create Account-{count}
        {/* {""} */}
       </Typography>
       <TextField label="name" {...register("name")} error={!!errors.name} helperText={errors.name?.message}/>
       <TextField label="email" {...register("email")} error={!!errors.email} helperText={errors.email?.message}/>
       <TextField label="password" {...register("password")} error={!!errors.password} helperText={errors.password?.message}/>
       <TextField label="confirm pasword" {...register("cPassword")} error={!!errors.cPassword} helperText={errors.cPassword?.message}/>
       <TextField label="mobile number" {...register("mobileNo")} error={!!errors.mobileNo} helperText={errors.mobileNo?.message}/>
       <Button variant="contained" type="submit">submit</Button>
    </Paper>
    </div>
  );
};
export default Register;
