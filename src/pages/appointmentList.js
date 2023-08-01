import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/PageBg";
import ListView from "../components/StudentListView";
import Heading from "../components/PageHeading";
import axiosSetup from "../axiosSetup";
import './appointmentList.css';

function ApointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axiosSetup.get("/Names?type=3") 
      .then((result) => {
        setAppointments(result.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <BrandNav logout="true" />
      <Bg type={7} />
      
      <div className="parentcontainer">
        <div className="flex-section">
          <Heading view="desktop" type={11} />
          <div className="List">
            <div className="list">
              <ListView List={appointments} type={3}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApointmentList;
