import { useContext } from "react";
import { userContext } from "../App";

function Header(){
    
    let {user1:{userName}}=useContext(userContext)
return(
    
<div className="Header">
<h1>Todo List </h1>
<h1>{userName.slice(0,1)}</h1>
</div>

)

}
export default Header;