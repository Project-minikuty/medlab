import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosSetup from "../axiosSetup";
import BrandNav from "../components/BrandNav";
import Heading from "../components/PageHeading";
import "./studentProgress.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditData = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");

  const defaultPlaceholders = {
    username: "john_doe",
    password: "",
    name: "John Doe",

    type: 0,
    email: "",
    height: "",
    weight: "",
    gender: "",
    dob: "1990-01-01",
    bloodGroup: "",
    guardianName: "",
    occupation: "",
    phoneNumber: "",
    address: "",
  };

  const [formData, setFormData] = useState(defaultPlaceholders);

  useEffect(() => {
    getDetails();

    async function getDetails() {
      try {
        const result = await axiosSetup.get(`/sDetails?id=${userId}`);
        setFormData(result.data);
      } catch (error) {
        toast.error("Fetching failed");
      }
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const adminId = localStorage.getItem("username");
      var body = {
        "username":formData.username,
        "name":formData.name,
        "age": formData.age.toString(),
        "email": formData.email,
        "height": formData.height,
        "weight": formData.weight,
        "gender": formData.gender,
        "type": 3,
        "dob": formData.dob,
        "bloodGroup": formData.bloodGroup,
        "guardianName": formData.guardianName,
        "occupation": formData.occupation,
        "phoneNumber": formData.phoneNumber,
        "address": formData.address,
      };
      console.log(body);
      await axiosSetup.patch(`/${adminId}/update?user_id=${userId}`, body);
      console.log("Data updated successfully");
      toast.success("Submission successful");
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Submission failed");
    }
  };

  return (
    <div>
      <BrandNav logout="true" />
      <Heading view="desktop" type={15} />

      <div className="parentcontainer">
        <div className="flex-section">
          <form className="formData" onSubmit={handleSubmit}>
            <div className="body">
              <div className="wrapper1 n">
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Username:</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Height (in cm):</label>
                    <input
                      type="text"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Weight (in Kg):</label>
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Gender:</label>
                    <input
                      type="text"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Date of Birth:</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Blood Group:</label>
                    <input
                      type="text"
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Guardian Name:</label>
                    <input
                      type="text"
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Occupation:</label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Contact Number:(10 digit)</label>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between">
                    <label>Address:</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success mt-5 submitEdit"
                >
                  Submit Edits
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex-section"></div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default EditData;
