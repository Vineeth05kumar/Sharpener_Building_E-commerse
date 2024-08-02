import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../Auth/auth-context";

function Login() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB-J2bv5fsMOzRrgGbsXfvcGBZpZx7ehQc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorResData) => {
            let errorMessage = "Authentication failed!";
            if (
              errorResData &&
              errorResData.error &&
              errorResData.error.message
            ) {
              errorMessage = errorResData.error.message;
            }
            throw new Error(errorMessage);
          });
        }
        return response.json();
      })
      .then((data) => {
        authCtx.login(data.idToken, data.localId);
        localStorage.setItem("token", data.idToken);
        navigate("/store");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Form onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
      </Form.Group>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;
