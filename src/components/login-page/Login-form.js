import React, { useState } from "react";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import axios from "../../axiosSetup";
import "./Login-form.css";
import emailjs from "emailjs-com";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function errorHandling(msg) {
    var d = document.getElementById("error-box");
    d.style.display = "flex";
    
    d.innerHTML=`<span>${msg}</span>`
    setTimeout(function () {
      d.style.display = "none";
      }, 5000);

  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(`/validate?username=${username}&password=${password}`)
      .then(async (res) => {
        errorHandling(res.data.message);
        if (res.data.access) {
          console.log("logged");
         
          navigate("/li")
          const userType = Number(res.data.details.type);
          const name = res.data.details.name;
          console.log(userType);
          localStorage.setItem("logged",true);
          localStorage.setItem("name", name);
          localStorage.setItem("user", userType);
          localStorage.setItem("username", username);
          localStorage.setItem("email", email);
          localStorage.setItem("_id",res.data.details._id);
          const email = res.data.details.email;
          try {

            const serviceId = "service_16f1chs";
            const templateId = "template_wy7909r";
            const fromEmail = localStorage.getItem("email")
            const emailParams = {
              userEmail: fromEmail, 
              subject: "",
              body: "",
            };
  
          
            await emailjs.send(serviceId, templateId, emailParams);
  
            console.log("Email sent successfully.");
          } catch (error) {
            console.error("Error sending email:", error);
          }
      
        } else {
          

          
          if (userType === 1) {
           navigate("/admin");
          } else if (userType === 2) {
            navigate("/doctor");
          } else if (userType === 3) {
            navigate("/parent");
          }
          navigate("/li")
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(username, password);
    
  }

  return (
    <div className="formContainer">

      

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
