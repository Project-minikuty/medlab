import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./Assignment.module.css";
import Bg from "../components/PageBg";
import ListView from "../components/AssignmentListView";
import BackButton from "../components/BackButton";
import Heading from "../components/PageHeading";

function ViewAssignment() {
  const [assignments, setAssignments] = useState([]);
  
  useEffect(() => {
    const parentUsername = localStorage.getItem("username");
    
    const fetchAssignments = async () => {
      try {
        
        const response = await fetch(`/assignments?username=${parentUsername}`);
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.log("Error fetching assignments:", error);
      }
    };

    fetchAssignments();
  }, []);

  const handleAssignmentRemove = (assignmentId) => {
    const updatedAssignments = assignments.filter(
      (assignment) => assignment._id !== assignmentId
    );
    setAssignments(updatedAssignments);
  };

  const handleViewAssignment = (assignmentId) => {
   
    console.log(`Viewing assignment with ID: ${assignmentId}`);
  };

  return (
    <>
      <BrandNav logout="true" />
      <Bg type={1} />

      <div className="parentcontainer">
        <div className="flex-section">
          <Heading type={12} view="desktop" />
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>
            <ListView
              List={assignments}
              onAssignmentRemove={handleAssignmentRemove}
              onViewAssignment={handleViewAssignment}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAssignment;
