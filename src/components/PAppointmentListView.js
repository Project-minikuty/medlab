import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListView.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function ListView(props) {
  const { List } = props;
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleClosePrompt = () => {
    setSelectedAppointment(null);
  };
 const handleJoinMeet =() =>{
  localStorage.setItem("roomID",selectedAppointment.room);
  navigate("/videocall");
 }
  return (
    <>
      <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">SI No.</div>
        <div className="d-flex flex-col font-weight-bold">Appointment</div>
      </div>

      {List.map((appointment, index) => (
        <div
          className="d-flex flex-row parent-body"
          key={index}
          onClick={() => handleButtonClick(appointment)}
        >
          <div className="d-flex flex-col">{index + 1}</div>
          <div className="d-flex flex-col">{appointment.doc}</div>
        </div>
      ))}

      {selectedAppointment && (
        <div className="appointment-details-prompt mt-5">
          <div className="appointment-details-content">
            <h4>Appointment Details</h4>
            <p>Date: {selectedAppointment.date}</p>
            <p>Time: {selectedAppointment.time}</p>
            <p>Doctor: {selectedAppointment.doc}</p>
            <p>Patient: {selectedAppointment.pat}</p>
            {selectedAppointment.room ? (
              <>
                <div className="d-flex">
                <p>Online Appointment: </p>
                <button className="btn btn-primary" onClick={handleJoinMeet}>
              Join Meeting
            </button>
                </div>
              </>
            ) : (
              <p>Offline appointment</p>
            )}

            <button className="btn btn-primary" onClick={handleClosePrompt}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
