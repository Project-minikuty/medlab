import React from "react";
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Form from "../components/Login-form";
import Bg from "../components/Login-Bg";
import "./login.css";

function Login() {
  
  return (
    <body>
      <BrandNav />
      <div className="logincontainer">
        <Form />
        <Bg />
      </div>
    </body>
  );
}

export default Login;
