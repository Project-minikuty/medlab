import React from 'react';
import "./formStyle.css"
import Heading from "../Heading";
import Avatar from "react-avatar";



function EditStudentProfileForm() {
  return (
    <>
     <form>
     <div className="title">
          <Heading text="Edit Student Data" />
        </div>
        <div className="body">

        
        <div className="wrapper1">
        <Avatar className= "avatar" name="User" size="150" round={true} />
          
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
                    <input
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
                    <label>Name of Guardian:</label>
                    <input type="text" name="name_of_guardian" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Address:</label>
                    <input type="text" name="address" />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
              <input type="submit" />
              <input type="reset" />
            </div>
                </div>
                
                </div>
            </form>
    </>
  );
}

export default EditStudentProfileForm;
