import React from "react";
import { Link } from "react-router-dom";
import "./Login_Signup.css";
const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
  };
  return (
    <div>
      <div className="login-wrapper">
        <h2>Sign up </h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
            className=""
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />

          <label htmlFor="">Confirm password</label>
          <input
            type="password"
            placeholder="confirm password"
            name="confirm"
          />
          <button type="submit">sign up</button>
          <span>
            Already have an account? <Link to="/login">Log in</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
