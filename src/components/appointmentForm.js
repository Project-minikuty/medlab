import React, { useState, useEffect } from "react";
import "./apf.css";
import axiosSetup from "../axiosSetup";
import { useNavigate } from "react-router-dom";
import timepicker, { TimePicker } from "react-time-picker";

const AppointmentForm = () => {
  const [appointmentType, setAppointmentType] = useState("ofAppointments");
  const [appointmentDate, setAppointmentDate] = useState(getCurrentDate());
  const [appointmentTime, setAppointmentTime] = useState();
  const [doctorUserName, setDoctorUserName] = useState("");
  const navigate = useNavigate();
  const [doctorlist, setDoctorList] = useState(null);

  // Function to get the current date in the format YYYY-MM-DD
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  function getTime() {
    return (
      <TimePicker
        defaultValue="10 : 00 am"
        placeholder="hh : mm  a"
        useTwelveHourFormat={true}
        showClockIcon={true}
        showCloseIcon={true}
        allowBackdrop={true}
      />
    );
  }
  useEffect(() => {
    gdL();

    async function gdL() {
      var result = await axiosSetup.get("/Names?type=2");
      console.log(result.data);
      setDoctorList(result.data);
    }
  }, []);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log("Appointment Type:", appointmentType);
    console.log("Appointment Date:", appointmentDate);
    console.log("Appointment Time:", appointmentTime);
    console.log("Doctor Name:", doctorUserName);

    var result = await axiosSetup.get(
      `/dappointments?username=${doctorUserName}&date_=${appointmentDate}&time=${appointmentTime}&aType=${appointmentType}`
    );
    if (result.data.length >= 3) {
      alert("no more slot available try another date or mode");
    } else {
      if (appointmentType == "onAppointments") {
        var body = {
          date: appointmentDate,
          time: appointmentTime,
          doc: doctorUserName,
          pat: localStorage.getItem("username"),
          room: `${doctorUserName}${localStorage.getItem("username")}`,
        };
        var result = await axiosSetup.post("/coAppointment", body);
        if (result.data.success) {
          alert("appointment made");
          navigate("/parent/viewappointments");
        } else {
          alert("something went wrong please contact admin");
        }
      } else {
        var body = {
          date: appointmentDate,
          time: appointmentTime,
          doc: doctorUserName,
          pat: localStorage.getItem("username"),
        };
        var result = await axiosSetup.post("/cfAppointment", body);
        if (result.data.success) {
          alert("appointment made");
          navigate("/parent/viewappointments");
        } else {
          alert("something went wrong please contact admin");
        }
      }
    }
  };

  // Function to handle form reset
  const handleReset = () => {
    setAppointmentType("offline");
    setAppointmentDate(getCurrentDate());
    setAppointmentTime(getTime());
    setDoctorUserName("");
  };

  return (
    <div className="afbody1">
      <div className="wrapper">
        <h1>Book Appointments</h1>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="d-flex">
            <div className="d-flex justify-content-between">
              <label>Online Appointment</label>
              <input
                type="radio"
                value="onAppointments"
                checked={appointmentType === "onAppointments"}
                onChange={() => setAppointmentType("onAppointments")}
              />
            </div>
            <div className="d-flex justify-content-between">
              <label>Offline Appointment</label>
              <input
                type="radio"
                value="ofAppointments"
                checked={appointmentType === "ofAppointments"}
                onChange={() => setAppointmentType("ofAppointments")}
              />
            </div>
          </div>
          <div className="d-flex justify-content-evenly">
            <label>Appointment Date:</label>
            <input
              type="date"
              min={getCurrentDate()}
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-evenly">
            <label>Appointment Time:</label>
            <input
              type="time"
              min={appointmentType === "ofAppointments" ? "10:00" : "16:00"}
              max={appointmentType === "ofAppointments" ? "12:00" : "18:00"}
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-evenly">
            <label>Doctor Name:</label>
            <select
              onChange={(e) => setDoctorUserName(e.target.value)}
              required={true}
              value={doctorUserName}
            >
              <option value="">select a doctor</option>
              {doctorlist &&
                doctorlist.map((e) => (
                  <option key={e._id} value={e.username}>
                    {e.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="d-flex justify-content-evenly">
            <input type="submit" value="Submit"></input>
            <input type="reset" value="Reset"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
