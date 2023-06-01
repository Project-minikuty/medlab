import "./addUser.css";
import React from "react";
import Navbar from "../components/BrandNav";
import Heading from "../components/Heading";



export default function App() {
  return (
    <div className=".App">
      <Navbar logout="true" />
      <div className="body1">
        {/* <h2 style='{{marginRight:"20px"}}>Add new user</h2>  */}
        <div className="title">
        <Heading text="Add new user" />
        </div>
        <form>
          <div className="wrapper1">
            
            <div className="d-flex">
              <div className="d-flex justify-content-between">
                <label>Name:</label>
                <input type="text" name="name" />
              </div>
              <div className="d-flex justify-content-between">
                <label>Date of Birth:</label>
                <input type="date" name="dob" />
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex justify-content-between">
                <label>Age:</label>
                <input type="number" name="age" />
              </div>
              <div className="d-flex justify-content-between">
                <label>Blood Group:</label>
                <input type="text" name="bloodgroup" />
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex justify-content-between">
                <label>Height:</label>
                <input type="text" name="height" />
              </div>
              <div className="d-flex justify-content-between">
                <label>Weight:</label>
                <input type="text" name="weight" />
              </div>
            </div>

            <div className="d-flex">
              <div className="d-flex justify-content-between">
              <label>
              Name of Guardian:
              </label>
              <input type="text" name="name_of_guardian" />
              </div>
              <div className="d-flex justify-content-between">
              <label>
              Address:
              </label>
              <input type="text" name="address" />
              </div>
            </div>

            <div className="d-flex">
              <div className="d-flex justify-content-between">
              <label>
              Username:
              </label>
              <input type="text" name="username" />
              </div>
              <div className="d-flex justify-content-between">
              <label>
              Password:
              </label>
              <input type="password" name="password" />
              </div>
            </div> 
          </div>
        </form>
      </div>
    </div>
  );
}
