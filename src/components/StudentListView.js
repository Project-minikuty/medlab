import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from '../axiosSetup';
import "./ListView.css";

export default function ListView(props) {
  const [suspendedUsers, setSuspendedUsers] = useState([]);
  const [canSuspend] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  const handleSuspend = async (user) => {
    const admin_username = localStorage.getItem("username");
    try {
      await axiosInstance.post(`/${admin_username}/suspend/${user.username}`);
      setSuspendedUsers((prevSuspendedUsers) => [...prevSuspendedUsers, user._id]);
    } catch (error) {
      console.error("Error suspending user:", error);
    }
  };

  const handleNameClick = async (userId) => {
    try {
      const response = await axiosInstance.get(`/sDetails?id=${userId}`);
      const responseData = response.data; 
      setUserDetails(responseData);
    } catch (error) {
      console.error("Error getting user details:", error);
    }
  };

  const handleCloseModal = () => {
    setUserDetails(null);
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
          <div
            className="d-flex flex-col text-center"
            onClick={() => handleNameClick(user._id)}
          >
            {user.username}
          </div>
          <div
            className="d-flex flex-col text-center"
            onClick={() => handleNameClick(user._id)}
          >
            {user.name}
          </div>
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

      {/* User Details Modal */}
      {userDetails && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-btn" onClick={handleCloseModal}>
              X
            </button>
            <div className="user-details">
              <h3>{userDetails.name}</h3>
              <p>Username: {userDetails.username}</p>
              <p>Age: {userDetails.age}</p>
              <p>Height: {userDetails.height}</p>
              {/* Add other user details here */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
