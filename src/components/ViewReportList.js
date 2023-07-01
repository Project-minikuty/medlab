import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./ListView.css";

export default function ListView(props) {
  const { List } = props;
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const navigate = useNavigate();

  const handleButtonClick = (assignmentId) => {
    localStorage.setItem("assID", assignmentId);
    navigate("/viewSubmission");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update the search term state
  };

  // Filter assignments based on the search term
  const filteredList = List.filter((assignment) =>
    assignment.pat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="search-bar ">
        <input
        className="searchBar"
          type="text"
          placeholder="Search by student name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">SI No.</div>
        <div className="d-flex flex-col font-weight-bold">Student Name</div>
        <div className="d-flex flex-col font-weight-bold">Assignment Name</div>
        <div className="d-flex flex-col font-weight-bold">Status</div>
      </div>

      {/* Search bar */}
      

      {filteredList.map((assignment, index) => (
        <div className="d-flex flex-row parent-body" key={assignment._id}>
          <div className="d-flex flex-col">{index + 1}</div>
          <div className="d-flex flex-col">{assignment.pat}</div>
          <div className="d-flex flex-col">{assignment.name}</div>
          <div className="d-flex flex-col">
            <button
              className={assignment.graded ? "btn btn-success" : "btn btn-danger"}
              onClick={() => handleButtonClick(assignment._id)}
            >
              {assignment.graded ? "Graded" : "Grade"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
