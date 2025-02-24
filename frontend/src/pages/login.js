import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <div className="input-group">
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
      </div>
      <button>Login</button>
      <div className="auth-links">
        <a href="#">Forgot Password?</a> | <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
