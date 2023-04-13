import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
