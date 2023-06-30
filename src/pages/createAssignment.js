import "./createAssignment.css";
import React from "react";
import Navbar from "../components/BrandNav";
import Heading from "../components/PageHeading";
import AddAForm from "../components/addAssignment/AddAForm";

export default function App() {
  return (
    <div>
      <Navbar logout="true" />
      <div ><Heading type={10}/>
      <AddAForm /></div>
      
    </div>
  );
}
