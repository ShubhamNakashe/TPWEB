import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tour from "../pages/Tour";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import SearchBar from "../shared/SearchBar";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Tour" element={<Tour />} />
      <Route path="/Tour/:id" element={<TourDetails />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/tour/search" element={<SearchResultList />} />
      <Route path="/tours" element={<SearchBar/>} />

    </Routes>
  );
};

export default Router;
