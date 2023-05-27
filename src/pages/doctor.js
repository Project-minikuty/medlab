import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/Bg";
import "./dashboard.css";
import ButtonGrid from "../components/Options";
import Heading from "../components/Heading";


function Doctor() {
  const buttons = [
    { img: require('../images/parentOptions/option1.png'), alt: 'list', text: 'View List of Students' },
    { img: require('../images/adminOptions/option4.png'), alt: 'schedule', text: 'View Appointments' },

  ];
  return (
   <>
      <BrandNav logout="true"/>
      <Heading type={2}/>
      <div className="parentcontainer">
      <ButtonGrid buttons={buttons} />
        <Bg type={2}/>

        
      </div>
   
   </>
  );
}

export default Doctor;
