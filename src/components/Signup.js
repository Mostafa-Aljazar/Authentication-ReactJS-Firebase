

import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Singup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      console.log(emailRef.current.value, passwordRef.current.value);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (er){
      setError("Failed to create an account");
      // setError(er);
    }
    setLoading(false);
  }
  

  return (
    <div>
      <Form>
        <div className="singup-title">Singup</div>

        {error && (
          <Alert key={"danger"} variant={"danger"}>
            {error}
          </Alert>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password Confirmation"
            ref={passwordConfirmationRef}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="button-singup"
          onClick={handelSubmit}
        >
          Singup
        </Button>
      </Form>

      <div className="button-signup-have-account">
        <div>Already have an account?</div>
        <Link
        to={'/login'}
          type="submit"
          className="button-signup-login"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Singup;
