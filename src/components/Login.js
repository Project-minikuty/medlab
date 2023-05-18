import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Login.css";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Card className="card-shadow">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label style={{ color: "#498589" }}>Email</Form.Label>
              <Form.Control
                style={{ borderColor: "#498589" }}
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              />
            </Form.Group>
            <Button
              block
              size="md"
              type="submit"
              disabled={!validateForm()}
              style={{
                backgroundColor: "white",
                color: "#498589",
                borderColor: "#498589",
              }}
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

