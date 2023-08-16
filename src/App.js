import { Button, Container, Form } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Singup from "./components/Signup";
import Login from "./components/Login";
import Update from "./components/Update";
import AuthProvider from "./context/AuthContext";
import ForgetPassword from "./components/ForgetPassword";
import ReqiuerAuth from "./components/ReqiuerAuth";

function App() {
  return (
    <div className="App">
      <Container className="app-page">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* first way for Protected Route*/}
              {
                // <Route element={<ReqiuerAuth />}>
                //   <Route path="/" element={<Dashboard />} />
                // </Route>
              }

              {/* second way for Protected Route*/}
              <Route
                path="/"
                element={
                  <ReqiuerAuth>
                    <Dashboard />
                  </ReqiuerAuth>
                }
              />

              <Route path="/singup" element={<Singup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/update" element={<Update />} />
              <Route path="/login" element={<Login />} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
/*
  <Route path="/" element={<Dashboard />} />
*/
