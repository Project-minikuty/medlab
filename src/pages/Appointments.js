import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import styles from "./submitAssignment.module.css";
import Bg from "../components/PageBg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BackButton from "../components/BackButton";

function Appointments() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <BrandNav logout="true" />
      <Bg type={3} />
      <div className="parentcontainer">
        <div className="flex-section">
          <h2 className={styles.heading}>Schedule Your Appointments</h2>
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>
            <label htmlFor="appointmentSchedule">Appointment Schedule</label>
            <br />
            <label htmlFor="bookSlot">Book your slot:</label>
            <br />
            <DatePicker className="form-control"
              
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointments;
