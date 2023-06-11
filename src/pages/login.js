import React from "react";
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/LoginNav";
import Form from "../components/login-page/Login-form";
import Bg from "../components/login-page/Login-Bg";
import "./login.css";

function Login() {
  
  return (
    <div >
<div className="l-error-box" id="error-box"></div>

      <BrandNav />
      <div className="logincontainer">
        <Form />
        <Bg />
      </div>
    </div>
  );
}

export default Login;
