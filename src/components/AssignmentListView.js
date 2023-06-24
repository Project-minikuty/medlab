import React, {  useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "../axiosSetup";
import "./ListView.css";

export default function ListView(props) { 
  return (
    <>
      <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">SI No.</div>
        <div className="d-flex flex-col font-weight-bold">Assignemnt Name</div>
        <div className="d-flex flex-col font-weight-bold">Status</div>
      </div>
      </>
      );
}