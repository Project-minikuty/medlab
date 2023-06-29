import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/Bg";
import "./dashboard.css";
import ButtonGrid from "../components/Options";
import Heading from "../components/Heading";

function AppointmentOptions({ onCancel, onViewOnlineAppointments, onViewOfflineAppointments }) {
  return (
    <div className="appointment-prompt">
      <div className="appointment-prompt-content">
        <button onClick={onViewOnlineAppointments}>View Online Appointments</button>
        <button onClick={onViewOfflineAppointments}>View Offline Appointments</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

function Doctor() {
  const buttons = [
    { img: require('../images/parentOptions/option1.png'), alt: 'list', text: 'View List of Students', navigateTo: '/doctor/studentList' },
    { img: require('../images/adminOptions/option2.png'), alt: 'schedule', text: 'View Appointments', navigateTo: '/doctor/appointmentOptions'},
    { img: require('../images/parentOptions/option3.png'), alt: 'list', text: 'Add Assignment', navigateTo: '/doctor/createAssignment' },
    { img: require('../images/parentOptions/chat.png'), alt: 'option4', text: 'View Direct Messages', navigateTo: '/chat' },
    { img: require('../images/parentOptions/option5.png'), alt: 'option5', text: 'View Submitted Assignments', navigateTo: '/doctor/viewReport' },
  ];

  const [showAppointmentPrompt, setShowAppointmentPrompt] = useState(false);

  function showAppointmentOptions() {
    setShowAppointmentPrompt(true);
  }

  function closeAppointmentPrompt() {
    setShowAppointmentPrompt(false);
  }

  function handleViewOnlineAppointments() {
    // Handle the logic for viewing online appointments
    console.log("View Online Appointments");
  }

  function handleViewOfflineAppointments() {
    // Handle the logic for viewing offline appointments
    console.log("View Offline Appointments");
  }

  return (
    <div className="body2">
      <BrandNav logout="true" />
      <Heading type={2} view="desktop" />
      <div className="parentcontainer">
        <ButtonGrid buttons={buttons} />
        <Bg type={2} />
      </div>

      {showAppointmentPrompt && (
        <AppointmentOptions
          onCancel={closeAppointmentPrompt}
          onViewOnlineAppointments={handleViewOnlineAppointments}
          onViewOfflineAppointments={handleViewOfflineAppointments}
        />
      )}
    </div>
  );
}

export default Doctor;
