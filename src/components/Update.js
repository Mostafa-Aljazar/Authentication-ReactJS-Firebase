import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Update = () => {
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value || passwordRef.current.value =="") {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      console.log(emailRef.current.value, passwordRef.current.value);
      await updateUserEmail(emailRef.current.value);
      await updateUserPassword(passwordRef.current.value);

      navigate("/");

    } catch (er) {
      setError("Failed to update an account");
      // setError(er);
    }
    setLoading(false);
  };

  const cansel = () => {
    navigate("/");
  };

  return (
    <div>
      <Form>
        <div className="update-title">Update Profile</div>

        {error && (
          <Alert key={"danger"} variant={"danger"}>
            {error}
          </Alert>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            defaultValue={currentUser.email}
          />
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
          className="button-update"
          onClick={handelSubmit}
        >
          Update
        </Button>
      </Form>
      <button type="submit" className="button-update-cansel" onClick={cansel}>
        Cansel
      </button>
    </div>
  );
};

export default Update;
