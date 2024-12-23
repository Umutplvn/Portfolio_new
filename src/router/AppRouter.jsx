import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRouter;
