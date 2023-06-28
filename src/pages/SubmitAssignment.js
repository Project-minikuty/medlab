import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/PageBg";
import Heading from "../components/PageHeading";
import ButtonGrid from "../components/Options";
import BackButton from "../components/BackButton";


function SubmitAssignment() {
  const buttons = [
    { img: require('../images/parentOptions/option1.png'), alt: 'option1', text: 'Submit Text File', navigateTo: '/doctor/createAssignment'},
    { img: require('../images/parentOptions/option2.png'), alt: 'option2', text: 'Submit Media File', navigateTo: '/doctor/createAssignment' },
    
  ];

  const isHighlighted = window.innerWidth > 768;
  return (
    <>
    <BrandNav logout="true" />
    <BackButton />  
    <Heading view="desktop" type={3} />
      <Bg type={3} />
      <div className="parentcontainer">
        <div className="flex-section selectionSpace">
        <ButtonGrid buttons={buttons} isHighlighted={isHighlighted} />
        </div>
      </div>
    </>
  );
}

export default SubmitAssignment;
