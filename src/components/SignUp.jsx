import React, { useState,useEffect } from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState({
    msg: "",
    type: ""
  })

  const handleSignUp = (e) => {
    e.preventDefault();

    const {email, password, confirmPassword, firstname, phone} = user

    if (!email.includes('@' && '.com')) {
      showAlert({msg: 'Enter valid email address', type: 'danger'})
    }else if (phone.length < 10 || phone.length > 10) {
      showAlert({msg: 'Please enter a valid phone number', type: 'danger'})
    }
    else if (password.length < 8) {
      showAlert({msg: 'Enter valid password', type: 'danger'})
    } else if (password !== confirmPassword) {
      showAlert({msg: 'Password does not Match', type: 'danger'})
    }
    else {
      showAlert({msg: `Congratulations ${firstname}, You have successfully registered`, type: 'success'})
      
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

  const handleChange = (e) => {
    const firstname = e.target.name;
    const lastname = e.target.name;
    const email = e.target.name;
    const phone = e.target.name;
    const password = e.target.name;
    const confirmPassword = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [firstname]: value, [lastname]: value, [email]: value, [password]: value, [phone]: value, [confirmPassword] : value });
  };

  return (
    <div className="signup-wrapper flex">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <h2>CREATE YOUR ACCOUNT</h2>
      <form className="flex" onSubmit={handleSignUp}>
        <p className={`error ${isError.type}`}> {isError.msg} </p>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          value={user.firstname}
          onChange={handleChange}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={user.lastname}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="example@email.com"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="phonenumber">Phone Number</label>
        <div className="phone flex">
          <span>+234</span>
          <input
            type="number"
            name="phone"
            maxLength= '10'
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="password">Password (8 minimum characters)</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <label htmlFor="checkbox" className="checkbox-text">
          <input type="checkbox" />
          Keep me signed in
        </label>
        <button className="login-btn">Create account</button>
        <div className="flex account">
          <p>Dont have an account?</p>
          <Link to="/login">Sign In</Link>
        </div>
      </form>
      <p className="terms">
        By Creating your Quickmunch account, you agree to the{" "}
        <a href="#">Terms of use</a> and <a href="#"> Privacy Policy</a>
      </p>
    </div>
  );
};

export default SignUp;
