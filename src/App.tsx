import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login";
import Nav from "./components/nav";
import SignUp from "./components/signup";
import Main from "./components/main";

export default function App() {
  return (
    <Router>
      <div className="select-none h-screen flex-grow flex justify-center">
        <div className="flex-auto w-96">
          <Nav />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
