// Preloader.js
import React from "react";
import "./style.css";

const Preloader = ({ message }) => {
  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p>{message || "Uploading file..."}</p>
    </div>
  );
};

export default Preloader;
