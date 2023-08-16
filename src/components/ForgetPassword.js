import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgetPassword = () => {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const emailRef = useRef();

  const handelReset = async(e) => {
    e.preventDefault();
    if (emailRef.current.value == "") {
      return setError("Please enter your registered Email");
    }

    try {
        setError("");
        setLoading(true);
        await resetPassword(emailRef.current.value)
        navigate("/login");

    } catch {
        setError('Error in reset operation')
    }
    setLoading(false);
  };

  return (
    <div>
      <Form>
        <div className="dashboard-title">Reset Password</div>

        {error && (
          <Alert key={"danger"} variant={"danger"}>
            {error}
          </Alert>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="button-reset-password"
          onClick={handelReset}
          disabled={!loading}
        >
          Reset Password
        </Button>

        <div
          className="button-forgot-password-login"
          onClick={() => navigate("/login")}
        >
          login
        </div>
      </Form>

      <div className="button-signup-have-account">
        <div>Need an account?</div>
        <Link to={"/signup"} type="submit" className="button-signup-login" >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
