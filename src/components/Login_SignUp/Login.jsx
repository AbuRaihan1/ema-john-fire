import React from "react";
import { Link } from "react-router-dom";
import "./Login_Signup.css";
const Login = () => {
  return (
    <div>
      <div className="login-wrapper">
        <h2>Wellcome Back</h2>
        <form className="form">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Your Email" name="email" />

          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" name="password" />
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
