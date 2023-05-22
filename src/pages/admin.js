import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/admin-dashboard/Admin-Bg";
import "./dashboard.css";
import Options from "../components/admin-dashboard/Options";


function Doctor() {
  
  return (
   <>
      <BrandNav logout="true"/>
      <div className="parentcontainer">
      <Options />
        <Bg />
        
      </div>
   
   </>
  );
}

export default Doctor;
