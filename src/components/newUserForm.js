import React, { useState } from "react";
import "./newUserForm.css"
import Navbar from "./BrandNav"
import Heading from "./PageHeading";

const NewUserForm = (props) => {
    const [userRole, setUserRole] = useState("parent");

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
  };
  return (
   <>
    <Navbar logout="true" />
    <div className="body1">
      <Heading view="desktop" type={6} />
      <form action="" method="PUT">
        <div className="wrapper1">
          <div className="d-flex justify-content-center userRole">
            <label className="userRoleLabel">User Role:</label>
            <select
              value={userRole}
              onChange={handleRoleChange}
              name="userRole"
              className="customDropdown"
            >
              <option value="parent">Parent</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {userRole === "parent" && (
            <>
              <div className="d-flex">
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Name:</label>
                  <input className=" wrapper2" type="text" name="name" />
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Date of Birth:</label>
                  <input className=" wrapper2" type="date" name="dob" />
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Age:</label>
                  <input className=" wrapper2" type="number" name="age" />
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Blood Group:</label>
                  <input
                  className=" wrapper2"
                    type="text"
                    list="blood"
                    name="bloodgroup"
                    required="true"
                  />
                  <datalist id="blood">
                    <option value="O+ve" />
                    <option value="O-ve" />
                    <option value="A+ve" />
                  </datalist>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Height:</label>
                  <input className=" wrapper2" type="text" name="height" />
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Weight:</label>
                  <input className=" wrapper2" type="text" name="weight" />
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Name of Guardian:</label>
                  <input className=" wrapper2" type="text" name="name_of_guardian" />
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Address:</label>
                  <input className=" wrapper2" type="text" name="address" />
                </div>
              </div>
            
            </>
          )}

          {userRole !== "parent" && (
            <>
              <div className="d-flex">
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Name:</label>
                  <input className=" wrapper2" type="text" name="name" />
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Date of Birth:</label>
                  <input className=" wrapper2" type="date" name="dob" />
                </div>
              </div>
            </>
          )}

          <div className="d-flex">
            <div className="d-flex justify-content-between">
              <label className=" wrapper2">Username:</label>
              <input className=" wrapper2" type="text" name="username" />
            </div>
            <div className="d-flex justify-content-between">
              <label className=" wrapper2">Password:</label>
              <input className=" wrapper2" type="password" name="password" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <input className=" wrapper2" type="submit" />
            <input className=" wrapper2"type="reset" />
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default NewUserForm;