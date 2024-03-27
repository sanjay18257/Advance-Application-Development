import React, { useState, useHistory } from "react";
import "./login.css";
import loginimg from "../../assets/login.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userType === "admin") {
      navigate("/admin");
    } else if (userType === "user") {
      navigate("/user");
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img className="image" src={loginimg} alt="Login" />
      </div>

      <div className="form-container">
        <div className="form-titlee">
          <h1 className="heading">Login!</h1>
          <p className="descriptionn">Welcome back, enter your details</p>
        </div>
        <div className="form">
          <form onSubmit={handleLogin}>
            <div className="form-item">
              <div className="type">
                <select
                  className="type-input"
                  id="userType"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            <label className="label-user" htmlFor="username">
              Username:
            </label>
            <div className="form-item">
              <input type="text" id="username" autoComplete="off" required />
            </div>

            <label className="label-pass" htmlFor="password">
              Password:
            </label>
            <div className="form-item">
              <input
                type="password"
                id="password"
                autoComplete="off"
                required
              />
            </div>

            <div className="checkdiv">
              <input className="check" type="checkbox" />
              <p1 className="remember">Remember Me</p1>
              <p1 className="forgotpass">
                <a href="/forgotpass">Forgot Pass?</a>
              </p1>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
        <div>
          <a href="/register">
            <button className="signup-btn">Register</button>
          </a>
        </div>

        <div className="other-login">
          <a href="https//google.com">
            <button className="google">Login with google</button>
          </a>

          <a href="https//twitter.com">
            <button className="twitter">Login with twitter</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
