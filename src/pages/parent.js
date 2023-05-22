import React from "react";
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav2 from "../components/BrandNav2";
import Bg from "../components/parent-dashboard/Parent-Bg";
import "./login.css";
import Options from "../components/parent-dashboard/Options";


function Parent() {
  
  return (
   <>
      <BrandNav2 />
      <div className="parentcontainer">
        <Bg />
        <Options />
      </div>
   
   </>
  );
}

export default Parent;
