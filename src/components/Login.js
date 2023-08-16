import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

  const location = useLocation();
  const redirectPath = location.state?.path || "/";


  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      //   console.log(emailRef.current.value, passwordRef.current.value);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath);
    } catch (er) {
      setError("Failed to create an account");
    }
  };

  return (
    <div>
      <Form>
        <div className="login-title">Login</div>

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

        <Button
          variant="primary"
          type="submit"
          className="button-login"
          onClick={handelSubmit}
        >
          login
        </Button>

        <div className="button-login-forgot-password" onClick={()=>navigate('/ForgetPassword')}>
          Forget Password
        </div>

      </Form>

      <div className="button-signup-have-account">
        <div>Need an account?</div>
        <Link to={"/singup"} type="submit" className="button-signup-login">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
