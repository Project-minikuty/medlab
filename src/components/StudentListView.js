import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListView.css";

export default function ListView() {
  const [canSuspend, setCanSuspend] = useState(true);

  const users = {
    username: ["user1", "user2", "user3", "user4", "user5"],
    name: ["name1", "name2", "name3", "name4", "name5"],
  };

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

      {users.username.map((username, index) => (
        <div
          className={`d-flex flex-row listBody ${
            !canSuspend ? "red-bg" : ""
          }`}
          key={index}
        >
          <div className="d-flex flex-col text-center">{username}</div>
          <div className="d-flex flex-col text-center">{users.name[index]}</div>
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
