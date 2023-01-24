import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UseContext";
import "./Login_Signup.css";
const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    // validation form
    if (password.length < 6) {
      setError("Password should be minimum 6 character");
      return;
    }
    if (password !== confirm) {
      setError("password and confirm password doesn't match");
      return;
    }
    createUser(email, password);
    form.reset();
    navigate("/");
  };
  return (
    <div>
      <div className="login-wrapper">
        <h2>Sign up </h2>
        <form className="form" onSubmit={handleSubmitRegister}>
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
          <p className="error-style">{error}</p>
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
