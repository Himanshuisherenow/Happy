import React, { useState } from "react";
import UserContext from "./UserContext.jsx";

//  <React.createContext().Provider value = {{user,userState}}>

const UserContextProvider = ({childeren})=>{ // children = props

    const [user, setUser] = useState(null)
    return(

        <UserContext.Provider value={{user, setUser}}>                 
            {childeren}
        </UserContext.Provider>
    )
}

export default UserContextProvider