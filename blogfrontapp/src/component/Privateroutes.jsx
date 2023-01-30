import React from "react";
import { Outlet , Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth";
const Privateroutes=()=>{


    // let loggedIn = false; 
    if(isLoggedIn()){
        return <Outlet />
    }
    else{
        return <Navigate to={"/login"} />
    }
    

    // return(
    //     <>
    //     <div>private routes</div>
    
    //     <Outlet/>

    //     </>
    //     )
}

export default Privateroutes;