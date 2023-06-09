import React, { useState } from "react";
import "./newUserForm.css";
import axios from "../axiosSetup";

const NewuserForm = (props) => {
  const [userRole, setUserRole] = useState("3");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
  };

  const handleSubmit = async (e, fun) => {
    e.preventDefault();

    const formData = {
      username: username,
      password: password,
      name: name,
      type: userRole,
      age: age,
      height: height,
      weight: weight,
      gender: gender,
      dob: dob,
      bloodGroup: bloodGroup,
      guardianName: guardianName,
      phoneNumber: phoneNumber,
      address: address,
    };

    const admin_username = localStorage.getItem("username");
    const result = await axios.post(`/${admin_username}/create`, formData);
    result.data.success ? props.setFormState(result.data) : errorHandling();

    function errorHandling() {
      console.log(result.data);
      var d = document.getElementById("error-box");
      d.style.display = "flex";
      setTimeout(function () {
        d.style.display = "none";
        d.innerHTML=`<span>${result.data.message}</span>`
        }, 5000);

    }
  };

  return (
    <>
      <div className="error-box" id="error-box"></div>
      <form onSubmit={handleSubmit}>
        <div className="wrapper1 ">
          <div className="d-flex justify-content-center userRole">
            <label className="userRoleLabel">User Role:</label>
            <select
              value={userRole}
              onChange={handleRoleChange}
              name="userRole"
              className="customDropdown"
            >
              <option value="3">Parent</option>
              <option value="1">Admin</option>
              <option value="2">Doctor</option>
            </select>
          </div>

          {userRole === "3" && (
            <>
              <div className="d-flex">
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Name:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Date of Birth:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Age:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Blood Group:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="text"
                    list="blood"
                    name="bloodgroup"
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
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
                  <input
                    required={true}
                    className=" wrapper2"
                    type="text"
                    name="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Weight:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="text"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Name of Guardian:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="text"
                    name="name_of_guardian"
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Address:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Gender:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="text"
                    name="name_of_guardian"
                    value={gender}
                    list="gender"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <datalist id="gender">
                    <option value="Male" />
                    <option value="Female" />
                    <option value="Other.." />
                  </datalist>
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Phone Number:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="phone"
                    name="address"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          {userRole !== "3" && (
            <>
              <div className="d-flex">
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Name:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <label className=" wrapper2">Date of Birth:</label>
                  <input
                    required={true}
                    className=" wrapper2"
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          <div className="d-flex">
            <div className="d-flex justify-content-between">
              <label className=" wrapper2">Username:</label>
              <input
                required={true}
                className=" wrapper2"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between">
              <label className=" wrapper2">Password:</label>
              <input
                required={true}
                className=" wrapper2"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <input required={true} className=" wrapper2" type="submit" />
            <input required={true} className=" wrapper2" type="reset" />
          </div>
        </div>
      </form>
    </>
  );
};

export default NewuserForm;
