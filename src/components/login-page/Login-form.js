import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import axios from "../../axiosSetup";
import "./Login-form.css";

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(`/auth/validate?username=${username}&password=${password}`)
      .then((res) => {
        setErrMsg(res.data.message);
        if (res.data.access) {
          console.log("logged");
          const userType = Number(res.data.type);
          if (userType === 1) {
            history.push("/admin");
          } else if (userType === 2) {
            history.push("/doctor");
          } else if (userType === 3) {
            history.push("/parent");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(username, password);
  }

  return (
    <div className="d-flex flex-column">
      <Heading />
      <SubHeading />
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="username">
            <Form.Label style={{ color: "#498589" }}>Username</Form.Label>
            <Form.Control
              style={{ borderColor: "#498589" }}
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          {errMsg && (
            <div className="err-msg">
              <text>{errMsg}</text>
            </div>
          )}
          <div className="d-flex justify-content-center">
            <Button
              block
              size="md"
              type="submit"
              disabled={!validateForm()}
              className="custom-button"
            >
              Login
            </Button>
          </div>
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
