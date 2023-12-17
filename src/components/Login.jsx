import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState({
    msg: "",
    type: "",
  });

  const HandleLogin = (e) => {
    e.preventDefault();
    if (!email && !password) {
      showAlert({ msg: "Provide All Required Fields", type: "danger" });
    } else if (!email.includes("@" && ".com")) {
      showAlert({ msg: "Email is Invalid", type: "danger" });
    } else if (password.length < 8 ) {
      showAlert({ msg: "Password too short", type: "danger" });
    } 
    
    else {
      showAlert({ msg: "Successfully Logged in", type: "success" });
      setEmail('')
      setPassword('')
    }
  };

  const showAlert = ({ msg, type }) => {
    setIsError({ msg, type });
  };

  const removeAlert = () => {
    setIsError({
      msg: "",
      type: ""
    });
  };

  useEffect(() => {
    setTimeout(() => {
      const timeOut = setTimeout(() => {
        removeAlert();
      }, 3000);
      return () => clearTimeout(timeOut);
    });
  }, [isError.type]);
  return (
    <div className="login-wrapper flex">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>

      <h2>SIGN IN TO YOUR ACCOUNT</h2>

      <form className="flex">
        <p className={`error ${isError.type}`}> {isError.msg}</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="checkbox" className="checkbox-text">
          <input type="checkbox" />
          Keep me signed in
        </label>
        <button className="login-btn" onClick={HandleLogin}>
          Sign In
        </button>
        <div className="flex">
          <p>Dont have an account?</p>
          <Link to="/signup">Create One</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
