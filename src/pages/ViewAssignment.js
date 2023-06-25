import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./Assignment.module.css";
import Bg from "../components/PageBg";
import ListView from "../components/AssignmentListView";
import BackButton from "../components/BackButton";
import Heading from "../components/PageHeading";

function ViewAssignment() {
  const assignments = [
    {
      "_id": "1",
      "name": "PhysioTherapy 1",
      "description": "Add video of physiotherapy exercise"
    },
    {
      "_id": "2",
      "name": "PhysioTherapy 2",
      "description": "Add video of physiotherapy exercise"
    },
    {
      "_id": "3",
      "name": "PhysioTherapy 3",
      "description": "Add video of physiotherapy exercise"
    }];
  return (
    <>
      <BrandNav logout="true" />
      <Bg type={1} />
      <BackButton />
      <div className="parentcontainer">
        <div className="flex-section">
      
          <Heading type={12} view="desktop"/>
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>
            <ListView List={assignments}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAssignment;
