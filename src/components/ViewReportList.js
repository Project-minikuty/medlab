import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./ListView.css";


export default function ListView(props) {
  const { List } = props;
  const navigate = useNavigate();



  const handleButtonClick = (assignmentId) => {

    localStorage.setItem('assID',assignmentId);

    navigate("/viewSubmission");
  };

  return (
    <>
 
   <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">SI No.</div>
        <div className="d-flex flex-col font-weight-bold">Student Name</div>
        <div className="d-flex flex-col font-weight-bold">Assignment Name</div>
        <div className="d-flex flex-col font-weight-bold">Status</div>
      </div>

      {List.map((assignment, index) => (
        <div className="d-flex flex-row parent-body" key={assignment._id}>
          <div className="d-flex flex-col">{index + 1}</div>
          <div className="d-flex flex-col">{assignment.pat}</div>
          <div className="d-flex flex-col">{assignment.name}</div>
          <div className="d-flex flex-col">
            <button
              className="btn btn-success"
              onClick={() => handleButtonClick(assignment._id)}
            >
              { assignment.graded? "Graded": "Grade"}
            </button>
          </div>
        </div>
      ))}
    

     
    </>
  );
}
