import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UseContext";
import "./Login_Signup.css";
const Login = () => {
  const navigate = useNavigate();
  const { signInUser, error } = useContext(AuthContext);
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password);
    navigate("/");
  };
  return (
    <div>
      <div className="login-wrapper">
        <h2>Wellcome Back</h2>
        <form className="form" onSubmit={handleSubmitLogin}>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Your Email" name="email" />

          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" name="password" />
          <p className="error-style">{error}</p>
          <button type="submit">Login</button>
          <span>
            New to ema john? <Link to="/signUp">Create Account</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
