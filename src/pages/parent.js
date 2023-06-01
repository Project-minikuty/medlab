import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/Bg";
import "./dashboard.css";
import ButtonGrid from "../components/Options";
import Heading from "../components/Heading";

function Parent() {
  const buttons = [
    { img: require('../images/parentOptions/option1.png'), alt: 'option1', text: 'View Student Progress' },
    { img: require('../images/parentOptions/option2.png'), alt: 'option2', text: 'View Student Profile' },
    { img: require('../images/parentOptions/option3.png'), alt: 'option3', text: 'View Assignments' },
    { img: require('../images/parentOptions/option4.png'), alt: 'option4', text: 'Submit Assignment' },
    { img: require('../images/parentOptions/option5.png'), alt: 'option4', text: 'Schedule Appoinments' },
  ];
  return (
    <>
      <BrandNav logout="true" />
      <Heading type={3} view="desktop"/>
      <div className="parentcontainer">
        <ButtonGrid buttons={buttons} />
        <Bg type={3}/>
      </div>
    </>
  );
}

export default Parent;
