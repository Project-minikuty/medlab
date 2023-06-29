import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./Assignment.module.css";
import Bg from "../components/Bg";
import ListView from "../components/PAppointmentListView";
import Heading from "../components/PageHeading";
import axios from "../axiosSetup";

function ViewPAppointment() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const onAppointmentsUrl = `/pappointments?username=${username}&aType=onAppointments&date_=2023-06-30`;
    const ofAppointmentsUrl = `/pappointments?username=${username}&aType=ofAppointments&date_=2023-06-30`;

    const fetchAppointments = async () => {
      try {
        const onAppointmentsResponse = await axios.get(onAppointmentsUrl);
        const ofAppointmentsResponse = await axios.get(ofAppointmentsUrl);
        const combinedAppointments = [
          ...onAppointmentsResponse.data,
          ...ofAppointmentsResponse.data
        ];
        setAppointments(combinedAppointments);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <BrandNav logout="true" />
      <Bg type={2} />
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

export default ViewPAppointment;
