import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListView.css";

export default function ListView(props) {
  const [canSuspend, setCanSuspend] = useState(true);


  const handleSuspend = () => {
    // Add the logic to handle suspend action here
  };

  return (
    <>
      <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">Username</div>
        <div className="d-flex flex-col font-weight-bold">Name</div>
        <div className="d-flex flex-col font-weight-bold">Status</div>
        {/* <button type="button" className="btn btn-outline-danger">Danger</button> */}
      </div>
     

      {props.List.map((user) => (
        <div
          className={`d-flex flex-row listBody ${
            !canSuspend ? "red-bg" : ""
          }`}
          key={user._id}
        >
          <div className="d-flex flex-col text-center">{user.username}</div>
          <div className="d-flex flex-col text-center">{user.name}</div>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleSuspend}
            disabled={!canSuspend}
          >
            Suspend
          </button>
        </div>
      ))}
    </>
  );
}
