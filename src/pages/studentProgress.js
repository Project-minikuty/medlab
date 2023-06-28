import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Heading from "../components/PageHeading";
import "./studentProgress.css";
import BackButton from "../components/BackButton";

function StudentProgress() {
  // Sample JSON object with default values
  const defaultValues = {
    name: "John Doe",
    dob: "1990-01-01",
    age: 30,
    doctorName: "Dr. Smith",
    completedAssignments: "5",
    pendingAssignments: "3",
    nextCheckupDate: "2023-07-01",
    overallScore: "95%",
  };

  const [formData] = useState(defaultValues);

  return (
    <>
      <BrandNav logout="true" />
      <Heading view="desktop" type={5} />

      <div className="parentcontainer">
        <div className="flex-section">
          <form className="studentProgress">
            <div className="body">
              <div className="wrapper1 n">
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} readOnly />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={formData.dob} readOnly />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Age:</label>
                    <input type="number" name="age" value={formData.age} readOnly />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Doctor Name:</label>
                    <input type="text" name="doctorName" value={formData.doctorName} readOnly />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Completed Assignments:</label>
                    <input
                      type="text"
                      name="completedAssignments"
                      value={formData.completedAssignments}
                      readOnly
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Pending Assignments:</label>
                    <input
                      type="text"
                      name="pendingAssignments"
                      value={formData.pendingAssignments}
                      readOnly
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Next Checkup Date:</label>
                    <input
                      type="date"
                      name="nextCheckupDate"
                      value={formData.nextCheckupDate}
                      readOnly
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Overall Score:</label>
                    <input type="text" name="overallScore" value={formData.overallScore} readOnly />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex-section"></div>
      </div>
    </>
  );
}

export default StudentProgress;
