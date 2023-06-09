import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import "./dashboard.css";
import Heading from "../components/Heading";
import Bg from "../components/Bg";
import ButtonGrid from "../components/Options";

function Doctor() {
  const buttons = [
    { img: require('../images/parentOptions/option1.png'), alt: 'option1', text: 'View List of Students', navigateTo: '/admin/studentlist'},
    { img: require('../images/parentOptions/option2.png'), alt: 'option2', text: 'View List of Doctors', navigateTo: '/admin/doctorlist' },
    { img: require('../images/adminOptions/option3.png'), alt: 'option3', text: 'Add New User', navigateTo: '/admin/addnewuser'},
    { img: require('../images/parentOptions/chat.png'), alt: 'option4', text: 'View Direct Messages', navigateTo: '/chat' },

  ];

  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setForceRender(!forceRender);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [forceRender]);

  const isHighlighted = window.innerWidth > 768;

  return (
    <div className="body2">
      <BrandNav logout="true" />
      <Heading view="desktop" type={1} />
      <div className="parentcontainer">
        <div className="adminButtons">
        <ButtonGrid buttons={buttons} isHighlighted={isHighlighted} />
        </div>
        <Bg type={1} />
      </div>
    </div>
  );
}

export default Doctor;
