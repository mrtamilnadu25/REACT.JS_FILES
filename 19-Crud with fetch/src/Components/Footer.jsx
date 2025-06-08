import React, { useContext } from "react";
import { userContext } from "../App";


const Footer = () => {
  let data = new Date()
  let {user:{name,mail,age}}=useContext(userContext)
return (
<div>
<footer className="Footer  f2 f3">
        <h2 className="f1">Footer</h2>
   <article className="footess f1 f3">
      <p><b>Mail:</b>{mail}/<b>Year:</b>{data.getFullYear()}</p>
   </article>
      </footer>
</div>
)
};

export default Footer;
