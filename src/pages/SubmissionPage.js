import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./submitAssignment.module.css";
import Bg from "../components/PageBg";

function Submission() {
  return (
    <>
      <BrandNav logout="true" />
      <Bg type={3} />
      <div className="parentcontainer">
        <div className="flex-section">
          <h2 className={styles.heading}>Submit Your Assignment</h2>
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>
            <label htmlFor="submissionStatus">Submission Status (DD/MM/YYYY):</label>
            <br></br>
            <label htmlFor="fileUpload">Upload Files:</label>
            <input type="file" id="fileUpload" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Submission;
