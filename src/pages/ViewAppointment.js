import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./Assignment.module.css";
import Bg from "../components/PageBg";
import ListView from "../components/AppointmentListView";
import BackButton from "../components/BackButton";
import Heading from "../components/PageHeading";

function ViewAppointment() {
  const assignments = [
    {
      "_id": "1",
      "name": "Akash Vijay",
      "description": "Weekly Checkup"
    },
    {
      "_id": "2",
      "name": "Tomin Joy",
      "description": "Monthly Checkup"
    },
    {
      "_id": "3",
      "name": "Ravi Das",
      "description": "Urinary Infection"
    }];
  return (
    <>
      <BrandNav logout="true" />
      <Bg type={1} />
      <BackButton />
      <div className="parentcontainer">
        <div className="flex-section">
      
          <Heading type={11} view="desktop"/>
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>
            <ListView List={assignments}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAppointment;
