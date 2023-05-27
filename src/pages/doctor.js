import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/Bg";
import "./dashboard.css";
import Options from "../components/doctor-dashboard/Options";


function Doctor() {
  
  return (
   <>
      <BrandNav logout="true"/>
      <div className="parentcontainer">
      <Options />
        <Bg type={2}/>
        
      </div>
   
   </>
  );
}

export default Doctor;
