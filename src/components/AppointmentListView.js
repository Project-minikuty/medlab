import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListView.css";

export default function ListView(props) {
  const { List } = props;

  const handleButtonClick = (assignmentId) => {
   
  };

  return (
    <>
      <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">SI No.</div>
        <div className="d-flex flex-col font-weight-bold">Appointment</div>
        <div className="d-flex flex-col font-weight-bold">Status</div>
      </div>

      {List.map((assignment, index) => (
        <div className="d-flex flex-row parent-body" key={assignment._id}>
          <div className="d-flex flex-col">{index + 1}</div>
          <div className="d-flex flex-col">{assignment.name}</div>
          <div className="d-flex flex-col">
            <button
              className="btn btn-primary"
              onClick={() => handleButtonClick(assignment._id)}
            >
              Confirm
            </button>
          </div>
        </div>
      ))}
    </>
  );
}