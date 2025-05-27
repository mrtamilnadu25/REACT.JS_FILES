import React from "react";
import { userContext } from "../App";

class Footer extends  React.Component{
  
  render(){
    let date =new Date()
    return(
      <footer className="Footer">
        <h2>Footer-</h2>
        <userContext.Consumer>

         {
          ({user1})=>{
            return(
              <h3>{user1.userName}-{date.getFullYear()}</h3>
              
            )
          }
         }

        </userContext.Consumer>
      </footer>
    )
  }
}
export default Footer;