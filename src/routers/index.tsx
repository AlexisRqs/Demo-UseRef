import React from 'react';
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import NoPage from "../pages/NoPage"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function MainRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="home" element={<HomePage/>} />
      <Route path="login" element={<LoginPage/>} />
      <Route path="*" element={<NoPage/>} />
    </Routes>
  </BrowserRouter>
}

export default MainRouter;
