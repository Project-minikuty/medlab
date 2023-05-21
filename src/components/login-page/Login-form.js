import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import axios from "axios";
import "./Login-form.css";

export default function Login() {
  const [usrname, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return usrname.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://medback.onrender.com//auth/validate?username=${usrname}&password=${password}`)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);});

      console.log(usrname, password);
  }

  return (
    <div className="d-flex flex-column">
      <Heading />
      <SubHeading />
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="usrname">
            <Form.Label style={{ color: "#498589" }}>Username</Form.Label>
            <Form.Control
              style={{ borderColor: "#498589" }}
              autoFocus
              type="text"
              value={usrname}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username"
              className="custom-placeholder"
            />
          </Form.Group>
          <br />
          <Form.Group size="lg" controlId="password">
            <Form.Label style={{ color: "#498589" }}>Password</Form.Label>
            <Form.Control
              style={{ borderColor: "#498589" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="custom-placeholder"
            />
          </Form.Group>
          <Button
            block
            size="md"
            type="submit"
            disabled={!validateForm()}
            className="custom-button"
          >
            Login
          </Button>
        </Form>
      </div>
      <div className="d-flex justify-content-center">
        <img
          className="mobile-logo"
          src={require("../../images/mobile-logo.png")}
          alt="logo"
        ></img>
      </div>
    </div>
  );
}
