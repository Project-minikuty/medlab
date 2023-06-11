import "./createAssignment.css";
import { useFilePicker } from 'use-file-picker';
import React, { useState } from "react";
import Navbar from "../components/BrandNav";
import Heading from "../components/Heading";
import { TextareaAutosize } from "@mui/material";

export default function App() {
    const [userRole, setUserRole] = useState("doctor");
  
    const handleRoleChange = (e) => {
      setUserRole(e.target.value);

    }
    const [openFileSelector,{ filesContent, loading, errors, plainFiles }] = useFilePicker({
      multiple: true, 
      accept: [".jpg", ".pdf",".png",".docx"],
      limitFilesConfig: { min: 2, max: 3 }
    });
return (
    <div className="App">
    <Navbar logout="true" />
      <div className="body1">
        <div className="title">
          <Heading text="Create New Assignment" />
        </div>
        <div className="wrapper2">
        <div className="content1">
          <label>Assignment Name:</label>
          <input type="text" className='input-field' />  
        </div>
        <div className="content1">
          <label>Assignment :</label>
          <textarea  className='input-field1'/>         
        </div>
         
        <div className="content2">
        
        <label>Upload your files : </label>
      <button class="btn3" onClick={() => openFileSelector()}>Select files</button>
      
    
    </div>
    
        <button type="submit" class="btn2">Submit</button>
      
        </div>
        </div>
        </div>
        
              
              );
}