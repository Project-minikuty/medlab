import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./Assignment.module.css";
import Bg from "../components/PageBg";
import ListView from "../components/AssignmentListView";
import Heading from "../components/PageHeading";

function ViewReport() {
  
  return (
    <>
      <BrandNav logout="true" />
      <Bg type={1} />

      <div className="parentcontainer">
        <div className="flex-section">
          <Heading type={14} view="desktop" />
         
        </div>
      </div>
    </>
  );
}

export default ViewReport;
