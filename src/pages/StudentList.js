import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./Assignment.module.css";
import Bg from "../components/PageBg";
import ListView from "../components/StudentListView";

function StudentList() {
  return (
    <>
      <BrandNav logout="true" />
      <Bg type={1} />
      <div className="parentcontainer">
        <div className="flex-section">
      
          <h2 className={styles.heading}>New Assignments</h2>
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>
            <ListView></ListView>
          </div>
        </div>
        <div className="flex-section">
          <h2 className={styles.heading}>Completed Assignments</h2>
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}></div>
        </div>
      </div>
    </>
  );
}

export default StudentList;
