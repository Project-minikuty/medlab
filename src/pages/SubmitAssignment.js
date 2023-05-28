import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./submitAssignment.module.css";
import Bg from "../components/PageBg";

function SubmitAssignment() {
  return (
    <>
      <BrandNav logout="true" />
      <Bg type={2} />
      <div className="parentcontainer">
        <div className="flex-section">
          <h2 className={styles.heading}>Assignment Submission</h2>
          <div
            className={`${styles.rectangleBox} ${styles.desktopSize}`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default SubmitAssignment;
