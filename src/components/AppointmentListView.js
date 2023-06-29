import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListView.css";

export default function ListView(props) {
  const { List } = props;
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleClosePrompt = () => {
    setSelectedAppointment(null);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
    

      <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">SI No.</div>
        <div className="d-flex flex-col font-weight-bold">Appointment</div>
        <div className="d-flex flex-col font-weight-bold">Status</div>
      </div>

      {List.map((appointment, index) => (
        <div
          className="d-flex flex-row parent-body"
          key={index}
          onClick={() => handleButtonClick(appointment)}
        >
          <div className="d-flex flex-col">{index + 1}</div>
          <div className="d-flex flex-col">{appointment.pat}</div>
          <div className="d-flex flex-col">
            <button className="btn btn-primary">Video Call</button>
          </div>
        </div>
      ))}

      {selectedAppointment && (
        <div className="appointment-details-prompt">
          <div className="appointment-details-content">
            <h4>Appointment Details</h4>
            <p>Date: {selectedAppointment.date}</p>
            <p>Doctor: {selectedAppointment.doc}</p>
            <p>Patient: {selectedAppointment.pat}</p>
            <p>Room: {selectedAppointment.room}</p>
            <button className="btn btn-primary" onClick={handleClosePrompt}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
