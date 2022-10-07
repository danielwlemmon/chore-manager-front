import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login";
import Nav from "./components/nav";
import SignUp from "./components/signup";

export default function App() {
  return (
    <Router>
      <div className="h-screen flex-grow flex justify-center">
        <div className="flex-auto w-96">
          <Nav />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
