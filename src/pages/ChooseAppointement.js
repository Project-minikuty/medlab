import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../axiosSetup";
import BrandNav from "../components/BrandNav";
import Bg from "../components/Bg";
import Heading from "../components/PageHeading";
import ButtonGrid from "../components/Options";


function SubmitOption() {
  

  const buttons = [
    {
      img: require("../images/parentOptions/option2.png"),
      alt: "option2",
      text: "Online Appointments",
      navigateTo: "/OnlineAppointment",
    },
    {
      img: require("../images/parentOptions/option3.png"),
      alt: "option2",
      text: "Offline Appointments",
      navigateTo: "/OfflineAppointment",
    },
  ];

  return (
    <>
      <BrandNav logout="true" />
      <Heading view="desktop" type={3} />
      <Bg type={3} />
      <div className="parentcontainer">
        <div className="flex-section selectionSpace">
          <ButtonGrid buttons={buttons} />
          
        </div>
      </div>
    </>
  );
  }
export default SubmitOption;
