import React from "react";
import { useParams } from "react-router-dom";
const Login = () => {
  let {user2} = useParams()
  return <div>Login-{user2}
  <p>rasukutty from tiruvannamalai </p></div>;
};

export default Login;
