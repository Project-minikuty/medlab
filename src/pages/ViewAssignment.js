import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./Assignment.module.css";
import Bg from "../components/PageBg";
import ListView from "../components/AssignmentListView";
import BackButton from "../components/BackButton";

function ViewAssignment() {
  const assignments = [
    {
      "_id": "1",
      "username": "PhysioTherapy 1",
      "name": "Tomin Joy"
    },
    {
      "_id": "2",
      "username": "",
      "name": "Akash Vijay"
    },
    {
      "_id": "3",
      "username": "akash2",
      "name": "Akash Vijay3"
    },
    {
      "_id": "4",
      "username": "tomin12p",
      "name": "Tomin Joy"
    }];
  return (
    <>
      <BrandNav logout="true" />
      <Bg type={1} />
      <BackButton />
      <div className="parentcontainer">
        <div className="flex-section">
      
          <h2 className={styles.heading}>Assignment List</h2>
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>
            <ListView List={assignments}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAssignment;
