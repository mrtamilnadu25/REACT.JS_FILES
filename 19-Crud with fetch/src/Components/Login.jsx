import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const Login = () => {
  let Navigate = useNavigate()
  let handleNavigate=()=>{
    Navigate("/")
  }
// handleNavigate("/")

  let {user2} = useParams()
  return <div>Login-{user2}
  <p>rasukutty from tiruvannamalai </p>
  <button onClick={handleNavigate}>Move to home</button>
  </div>;
};

export default Login;
