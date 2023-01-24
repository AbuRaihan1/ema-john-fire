import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UseContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link> {user?.email}</Link>
        {user?.uid ? (
          <button className="signUp_logout" onClick={handleLogOut}>
            Sign out
          </button>
        ) : (
          <>
            <Link to="/login" className="signUp_logout">
              Log in
            </Link>
            <Link to="/signUp" className="signUp_logout">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
