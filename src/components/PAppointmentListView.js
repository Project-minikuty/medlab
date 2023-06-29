import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListView.css";

export default function ListView(props) {
  const { List } = props;

  const handleButtonClick = (appointmentList) => {
    // Handle button click
  };

  return (
    <>
      <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">SI No.</div>
        <div className="d-flex flex-col font-weight-bold">Appointment</div>
        <div className="d-flex flex-col font-weight-bold">Status</div>
      </div>

      {List.map((appointment, index) => (
        <div className="d-flex flex-row parent-body" key={index}>
          <div className="d-flex flex-col">{index + 1}</div>
          <div className="d-flex flex-col">{appointment.doc}</div>
          <div className="d-flex flex-col">
            <button
              className="btn btn-primary"
              onClick={() => handleButtonClick(appointment._id)}
            >
              Video Call
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
