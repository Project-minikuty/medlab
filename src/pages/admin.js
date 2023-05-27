import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import "./dashboard.css";
import Heading from "../components/Heading";

import Bg from "../components/Bg";
import ButtonGrid from "../components/Options";

function Doctor() {
  const buttons = [
    { img: require('../images/parentOptions/option1.png'), alt: 'option1', text: 'View List of Students' },
    { img: require('../images/parentOptions/option2.png'), alt: 'option2', text: 'View List of Doctors' },
    { img: require('../images/adminOptions/option3.png'), alt: 'option3', text: 'Add New User' },
    { img: require('../images/adminOptions/option4.png'), alt: 'option4', text: 'Delete User' },
  ];
  

  return (
   <>
      <BrandNav logout="true"/>
      <Heading view = "desktop" type={1}/>
      <div className="parentcontainer">

      <ButtonGrid buttons={buttons} />

        <Bg type={1}/>
      </div>
   
   </>
  );
}

export default Doctor;
