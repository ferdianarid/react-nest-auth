import Navbar from "components/Navbar";
import Dashboard from "pages/Dashboard";
import Homepage from "pages/Homepage";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/dashboard'} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment >
  );
}

export default App;
