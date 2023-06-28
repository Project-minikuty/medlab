import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import "./dashboard.css";
import Heading from "../components/PageHeading";
import Bg from "../components/Bg";
import "./about.css"


function About() {

  return (
    <div className="body2">
      <BrandNav logout="true" />
      <Heading view="desktop" type={13} />
      <div className="parentcontainer">
        <div className="card">
        <div className="card-body">
        This project is a progressive web application named MEDLAB, a platform for different hospitals to manage their therapy sessions for children with mental disabilities or autism. The primary goal of this PWA is to provide home therapy for children with mental disabilities or autism and make it easier for doctors to monitor their performance remotely. The software aims to improve the quality of healthcare services and make it easier for doctors and therapists to provide home therapy sessions.
        </div>
        </div>
       
        <Bg type={1} />
      </div>
    </div>
  );
}

export default About;
