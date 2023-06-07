import React from "react";
import { useNavigate } from "react-router";
import "./formSuccess.css";
import Heading from "./Heading";

export default function FormSuccess(props) {
    const navigate = useNavigate();

    function goHome(){
        navigate("/admin");
    }
    function oneMore() {
        navigate("/admin/addnewuser")
    }
  return (
    <div className="success_container">
      <div className="messg_box">
        <Heading text={props.text} />
        <div className="button-row">
          <button className="GHButton" onClick={goHome}>Go to home</button>
          <button className="GHButton" onClick={oneMore}>Add One More</button>
        </div>
      </div>
    </div>
  );
}


