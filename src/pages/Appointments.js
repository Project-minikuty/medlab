import React from "react";
import BrandNav from "../components/BrandNav";
import AppointmentForm from "../components/appointmentForm";

function Appointments() {

  return (
    <>
      <BrandNav logout="true" />
      <AppointmentForm />
    </>
  );
}

export default Appointments;
