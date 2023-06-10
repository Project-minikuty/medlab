import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./ListView.css";

export default function ListView(props) {
  const [suspendedUsers, setSuspendedUsers] = useState([]);
  const [canSuspend, setCanSuspend] = useState(true);

  const handleSuspend = async (user) => {
    const admin_username = localStorage.getItem("username");
    try {
      await axios.post(`https://medback.onrender.com/${admin_username}/suspend/${user.username}`);
      setSuspendedUsers((prevSuspendedUsers) => [...prevSuspendedUsers, user._id]);
    } catch (error) {
      console.error("Error suspending user:", error);
    }
  };

  return (
    <>
      <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">Username</div>
        <div className="d-flex flex-col font-weight-bold">Name</div>
        <div className="d-flex flex-col font-weight-bold">Status</div>
      </div>

      {props.List.map((user) => (
        <div
          className={`d-flex flex-row listBody ${
            suspendedUsers.includes(user._id) ? "red-bg" : ""
          }`}
          key={user._id}
        >
          <div className="d-flex flex-col text-center">{user.username}</div>
          <div className="d-flex flex-col text-center">{user.name}</div>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => handleSuspend(user)}
            disabled={!canSuspend || suspendedUsers.includes(user._id)}
          >
            Suspend
          </button>
        </div>
      ))}
    </>
  );
}
