import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";

import Heading from "../components/PageHeading";
import "./studentProgress.css"
import BackButton from "../components/BackButton";

function StudentProgress() {
  return (
    <>
      <BrandNav logout="true" />
      <BackButton />
      <Heading view="desktop" type={5} />
     
      <div className="parentcontainer">
        <div className="flex-section">
          <form className="studentProgress">

        <div className="body">
        <div className="wrapper1 n">
        <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Name:</label>
                    <input type="text" name="name" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Age:</label>
                    <input type="number" name="age" />
                  </div>
                  <div className="d-flex justify-content-between">
                  <label>Doctor Name:</label>
                    <input type="text" name="height" />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Completed Assignments:</label>
                    <input type="text" name="height" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Pending Assignments:</label>
                    <input type="text" name="weight" />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Next Checkup Date</label>
                    <input type="text" name="name_of_guardian" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Overall Score:</label>
                    <input type="text" name="address" />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
             
            </div>
                </div>
                
                </div>
            </form>
        </div>
        <div className="flex-section">
        
          </div>
      </div>
    </>
  );
}

export default StudentProgress;
