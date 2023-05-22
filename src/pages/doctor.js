import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/doctor-dashboard/Doctor-Bg";
import "./parent.css";
import Options from "../components/doctor-dashboard/Options";


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
