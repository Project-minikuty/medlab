import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/parent-dashboard/Parent-Bg";
import "./parent.css";
import Options from "../components/parent-dashboard/Options";


function Parent() {
  
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

export default Parent;
