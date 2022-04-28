import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div className="log-main">
      <div className="pwdreset_subcontainer">
        <div className="log-img">
          <Link to="/">
            <img src="./image/logo.png" alt="" className="logo" />
          </Link>
        </div>
        <form>
          <div className="login">
            <label className="log-title">E-Mail Address</label>
            <input
              type="text"
              required
              className="log-placeholder email-place"
            />
          </div>
          <div>
            <button className="reset-button" type="submit">
              <span style={{ fontSize: "19px" }}>Send Password Reset Link</span>
            </button>
          </div>
        </form>
        <div className="pwd-section">
          <h2 style={{ fontSize: "16px", marginBottom: 20, marginTop: 15 }}>
            Back To Login
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#558eff",
                paddingLeft: 3,
              }}
            >
              Login
            </Link>
          </h2>
        </div>
        <div className="pwd-backtohome">
          <Link to="/" className="backToHome">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
