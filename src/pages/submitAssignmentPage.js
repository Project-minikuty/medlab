import "./createAssignment.css";
import { useFilePicker } from 'use-file-picker';
import React from "react";
import Navbar from "../components/BrandNav";
import Heading from "../components/PageHeading";
import BackButton from "../components/BackButton";


export default function App() {
  
  
    const [openFileSelector] = useFilePicker({
      multiple: true, 
      accept: [".jpg", ".pdf", ".png", ".docx", ".mp4", ".mva"],
      limitFilesConfig: { min: 2, max: 3 }
    });
return (
    <div className="App">
    <Navbar logout="true" />
    
      <div className="body1">
     <div className="backButtonContainer">
      <BackButton />
      </div>
        <div className="title">
        
        <Heading type={3} view="desktop"/>
        </div>
        <div className="wrapper3">
        <div className="content1">
          <label>Assignment Name:</label>
          <input type="text" className='input-field' />  
        </div>
        <div className="content1">
          <label>Assignment Description:</label>
          <textarea  className='input-field1'/>         
        </div>
         
        <div className="content2">
        
        <label className="">Upload your files : </label>
      <button className="btn3" onClick={() => openFileSelector()}>Select files</button>
    
    </div>
    
        <button type="submit" class="btn4 submitButton">Submit</button>
      
        </div>
        </div>
        </div>
        
              
              );
}