import React from "react";
import "./register.css";
import signupimg from "../../assets/login.jpg";
const click = "/login";
const Register = () => {
  return (
    <div className="signup-container">
      <div className="image-container">
        <img className="image" src={signupimg} alt="signup" />
      </div>
      <div className="form-container">
        <form action="/user">
          <div className="form-lines">
            <h1 className="heading">Register!</h1>
          </div>
          <div className="form-content">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <br />
            <input className="input" type="email" id="email" required />
            <br />
            <label className="label" htmlFor="user">
              Username:
            </label>
            <br />
            <input className="input" type="text" id="user" required />
            <br />

            <label className="label" htmlFor="phone">
              phoneno:
            </label>
            <br />

            <input
              className="input"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              required
            />
            <br />
            <label className="label" for="pwd">
              Password:
            </label>
            <br />
            <input
              className="input"
              type="password"
              id="pwd"
              name="pwd"
              required
            ></input>
            <br />
            <label className="label" for="cpwd">
              Confirm Password:
            </label>
            <br />
            <input
              className="input"
              type="password"
              id="cpwd"
              name="pwd"
              required
            ></input>
          </div>
          <button className="reg-btn" type="submit">
            register
          </button>
          <a className="logbut" href="/login">
            Login?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
