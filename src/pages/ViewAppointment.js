import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./Assignment.module.css";
import Bg from "../components/PageBg";
import ListView from "../components/AppointmentListView";
import Heading from "../components/PageHeading";
import axios from "../axiosSetup";

function ViewAppointment() {
  const [appointments, setAppointments] = useState([]);
  const currentDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const url = `/dappointments?username=${username}&aType=onAppointments&date_=${currentDate}`;

    axios
      .get(url)
      .then(response => {
        setAppointments(response.data);
       
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <>
      <BrandNav logout="true" />
      <Bg type={1} />
      <div className="parentcontainer">
        <div className="flex-section">
          <Heading type={11} view="desktop" />
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>
            <ListView List={appointments} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAppointment;
