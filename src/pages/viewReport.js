import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./Assignment.module.css";
import Bg from "../components/PageBg";
import ListView from "../components/ViewReportList";
import Heading from "../components/PageHeading";
import axios from "../axiosSetup";


function ViewReport() {
  const [assignmentList, setAssignmentList] = useState([]);

  useEffect(() => {
    const fetchAssignmentList = async () => {
      try {
        const username = localStorage.getItem("username");

        const response = await axios.get(`/dAssignments/${username}`);
        const data = response.data;

        setAssignmentList(data);
      } catch (error) {
        console.error("Error fetching assignmentList:", error);
      }
    };

    fetchAssignmentList();
  }, []);

  return (
    <>
      <BrandNav logout="true" />
      <Bg type={1} />

      <div className="parentcontainer">
        <div className="flex-section">
          <Heading type={14} view="desktop" />
        
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>

          <ListView List={assignmentList} type={2} />
          </div>
          </div>
      </div>
    </>
  );
}

export default ViewReport;
