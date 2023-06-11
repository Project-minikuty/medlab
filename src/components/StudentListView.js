import React, {  useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "../axiosSetup";
import "./ListView.css";

export default function ListView(props) {
  // const [suspendedUsers, setSuspendedUsers] = useState([]);
  // const [reinstatedUsers,setReinstatedUsers]=useState([]);
  const [val, setVal] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const [curU,setCurU]=useState("")

  const handleSuspend = async (user) => {
    const admin_username = localStorage.getItem("username");
    try {
      await axiosInstance.patch(
        `/${admin_username}/suspend?username=${user.username}`
      );
      props.List[props.List.indexOf(user)]["suspended"] = true;
      setVal("s");
      console.log(val);
      // setSuspendedUsers((prevSuspendedUsers) => [...prevSuspendedUsers, user._id]);
    } catch (error) {
      console.error("Error suspending user:", error);
    }
  };

  const handleReinstate = async (user) => {
    const admin_username = localStorage.getItem("username");
    try {
      await axiosInstance.patch(
        `/${admin_username}/reinstate?username=${user.username}`
      );
      props.List[props.List.indexOf(user)]["suspended"] = false;
      setVal("r");
      console.log(props.List);
    } catch (error) {
      console.error("Error suspending user:", error);
    }
  };

  const handleNameClick = async (user) => {
    try {
      const response = await axiosInstance.get(`/sDetails?id=${user._id}`);
      const responseData = response.data;
      console.log(responseData);
      setCurU(user)
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
          className={`d-flex flex-row  listBody ${
            user.suspended ? "red-bg" : ""
          }`}
          key={user._id}
        >
          <div
            className="d-flex flex-col text-left"
            onClick={() => handleNameClick(user)}
          >
            {user.username}
          </div>
          <div
            className="d-flex flex-col text-right"
            onClick={() => handleNameClick(user)}
          >
            {user.name}
          </div>
          {user.suspended ? (
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => handleReinstate(user)}
            >
              Reinstate
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => handleSuspend(user)}
            >
              Suspend
            </button>
          )}
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
            </div>
            {curU.suspended ? (
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => handleReinstate(curU)}
            >
              Reinstate
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => handleSuspend(curU)}
            >
              Suspend
            </button>
          )}
          </div>
        </div>
      )}
    </>
  );
}
