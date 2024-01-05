import React ,{useContext}from "react";
import UserContext from "../UserContext.jsx";



export default function Profile() {

    const {user} = useContext(UserContext);

   return  (
   <>
   <div>Welcome {user.username}</div>
    <div> Please Login </div>
    </>
    )


     
}

