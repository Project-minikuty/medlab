import React from "react";
import Login from "../pages/login";
import Admin from "../pages/admin";
import Doctor from "../pages/doctor";
import Parent from "../pages/parent";

function Home(){
    return(
       !localStorage.getItem('logged')? <Login /> : dashboardSelect()
    );

    function dashboardSelect() {
        
           const userType = localStorage.getItem("user")
           console.log(userType);
           if (userType === "1") {
           return <Admin />
           } else if (userType === "2") {
             return <Doctor />
           } else if (userType === "3") {
             return <Parent />
           }
        
    }
}

export default Home;