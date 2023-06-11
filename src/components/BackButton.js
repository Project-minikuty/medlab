import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './BackButton.css'

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button className='btn btn-outline-success goBack' onClick={goBack}>&lt;&lt; Go Back</button>
  );
};

export default BackButton;
