import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  const goToUpdate = (e) => {
    e.preventDefault();
    navigate("/update");
  };

  const handelLogout = (e) => {
    e.preventDefault();
    logout()
    navigate("/singup");
  };

  return (
    <div>
      <Form>
        <div className="dashboard-title">Profile</div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <strong>Email:</strong> {currentUser.email}
          </Form.Label>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="button-dashboard"
          onClick={goToUpdate}
        >
          Update Profile
        </Button>
      </Form>

      <Button
        variant="primary"
        type="submit"
        className="button-dashboard-logout"
        onClick={handelLogout}
      >
        Log out
      </Button>
    </div>
  );
};

export default Dashboard;
