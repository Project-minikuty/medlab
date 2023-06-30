import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "../axiosSetup";
import "./ListView.css";
import { useNavigate } from "react-router-dom";

export default function ListView(props) {
  const [val, setVal] = useState(true);
  const [userDetails, setUserDetails] = useState("");
  const [curU, setCurU] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sortedList, setSortedList] = useState([]);
  const navigate = useNavigate();

  const handleSuspend = async (user) => {
    const admin_username = localStorage.getItem("username");
    try {
      await axiosInstance.patch(
        `/${admin_username}/suspend?username=${user.username}`
      );
      props.List[props.List.indexOf(user)]["suspended"] = true;
      setVal((v) => !v);
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
      setVal((v) => !v);
    } catch (error) {
      console.error("Error suspending user:", error);
    }
  };

  const handleNameClick = async (user) => {
    var url;
    try {
      switch (props.type) {
        case 1:
          url = `/aDetails?id=${user._id}`;
          break;
        case 2:
          url = `/dDetails?id=${user._id}`;
          break;
        case 3:
          url = `/sDetails?id=${user._id}`;
          break;
        default:
          url = "";
      }

      const response = await axiosInstance.get(url);
      const responseData = response.data;
      setCurU(user);
      setUserDetails(responseData);
    } catch (error) {
      console.error("Error getting user details:", error);
    }
  };

  const handleCloseModal = () => {
    setUserDetails(null);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const filteredList = props.List.filter((user) =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSortedList(filteredList);
  }, [props.List, searchInput]);

  return (
    <>
      <div className="search-container">
        <input
        className="searchBar"
          type="text"
          placeholder="Search by Name"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>

      <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">Username</div>
        <div className="d-flex flex-col font-weight-bold">Name</div>
        <div className="d-flex flex-col font-weight-bold">Status</div>
      </div>

      {sortedList.map((user) => (
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

      {userDetails && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-btn" onClick={handleCloseModal}>
              X
            </button>
            <div className="user-details">
              <h3>{userDetails.name}</h3>
              <p>Username: {userDetails.username}</p>
              <p>User ID: {userDetails._id}</p>
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
                Suspend User
              </button>
            )}

            <button
              type="button"
              className="btn btn-outline-primary mt-3"
              onClick={() => navigate(`/editdUser?id=${userDetails._id}`)}
            >
              Edit User Data
            </button>
          </div>
        </div>
      )}
    </>
  );
}
