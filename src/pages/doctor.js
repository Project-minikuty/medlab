import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/Bg";
import "./dashboard.css";
import ButtonGrid from "../components/Options";
import Heading from "../components/Heading";


function Doctor() {
  const buttons = [
    { img: require('../images/parentOptions/option1.png'), alt: 'list', text: 'View List of Students', navigateTo: '/doctor/studentList' },
    { img: require('../images/adminOptions/option4.png'), alt: 'schedule', text: 'View Appointments' },
    { img: require('../images/parentOptions/option3.png'), alt: 'list', text: 'Add Assignment', navigateTo: '/doctor/createAssignment' },

  ];
  return (
   <div className="body2">
      <BrandNav logout="true"/>
      <Heading type={2} view="desktop"/>
      <div className="parentcontainer">
      <ButtonGrid buttons={buttons} />
        <Bg type={2}/>

        
      </div>
   
   </div>
  );
}

export default Doctor;
