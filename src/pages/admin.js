import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import "./dashboard.css";
import ButtonGrid from "../components/admin-dashboard/Options";
import Bg from "../components/Bg";


function Doctor() {
  
  return (
   <>
      <BrandNav logout="true"/>
      <div className="parentcontainer">

<ButtonGrid />

        <Bg bgText="Welcome Admin" bgSubText=" Manage your admin privileges here" />
      </div>
   
   </>
  );
}

export default Doctor;
