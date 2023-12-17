import React from "react";
import ErrorImg from "../assets/error.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-wrapper">
      <img src={ErrorImg} alt="Page Not Found" />
      <Link to="/">
        <button>Back To HomePage</button>
      </Link>
    </div>
  );
};

export default Error;
