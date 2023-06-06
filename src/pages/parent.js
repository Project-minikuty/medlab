import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/Bg";
import "./dashboard.css";
import ButtonGrid from "../components/Options";
import Heading from "../components/Heading";

function Parent() {
  const buttons = [
    { img: require('../images/parentOptions/option1.png'), alt: 'option1', text: 'View Student Progress', navigateTo: {}},
    { img: require('../images/parentOptions/option2.png'), alt: 'option2', text: 'View Student Profile', navigateTo: '/parent/editData'},
    { img: require('../images/parentOptions/option3.png'), alt: 'option3', text: 'View Assignments', navigateTo: '/parent/viewAssignment' },
    { img: require('../images/parentOptions/option4.png'), alt: 'option4', text: 'Submit Assignment', navigateTo: '/parent/submitAssignment' },
    { img: require('../images/parentOptions/option5.png'), alt: 'option4', text: 'Schedule Appoinments', navigateTo: '/parent/appointments' },
  ];
  return (
    <>
    <div className="dashboardBody">
      <BrandNav logout="true" />
      <Heading type={3} view="desktop"/>
      <div className="parentcontainer">
        <ButtonGrid buttons={buttons} />
        <Bg type={3}/>
      </div>
    </div>
    </>
  );
}

export default Parent;
