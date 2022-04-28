import React from "react";
import "./login.css";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

function Login() {
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { phonenumber: phonenumber, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log("first", allEntry);
  };
  const handleClick = () => {
    if (phonenumber == null && password <= 6) {
      setErrMessage("Invalid Phone number or Password");
    }
  };

  return (
    <div className="log-main">
      <div className="log-submain">
        <div className="log-img">
          <Link to="/">
            <img src="./image/logo.png" alt="" className="logo" />
          </Link>
        </div>
        <div className="log-form">
          {/* <div>
            {allEntry.map((curElem) => {
              return (
                <div>
                  <p>{curElem.phonenumber}</p>
                  <p>{curElem.password}</p>
                </div>
              );
            })}
          </div>  */}
          <div className="errMessage">{errMessage}</div>
          <form action="" onSubmit={submitForm}>
            <div className="login">
              <label className="log-title">Phone Number</label>
              <input
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                required
                placeholder="Enter Phone Number"
                className="log-placeholder phone-place"
              />
            </div>
            <div className="login">
              <label className="log-title">Password</label>
              <div className="input-password">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  className="log-placeholder password-place"
                />
                <a className="toggle-icon" onClick={togglePassword}>
                  {showPassword ? (
                    <FiEye className="togglecolor" />
                  ) : (
                    <FiEyeOff className="togglecolor" />
                  )}
                </a>
              </div>
            </div>
            <div className="log-remme-fgtpwd">
              <div className="magic-checkbox">
                <input
                  id="demo-form-checkbox"
                  type="checkbox"
                  name="remember"
                />
                <label for="demo-form-checkbox" className="text-sm">
                  Remember Me
                </label>
              </div>

              <Link to="/passwordreset" className="forgot-paswd">
                Forget Password?
              </Link>
            </div>
            <div className="login-signin">
              <button
                className="signin-button"
                type="submit"
                onClick={handleClick}
              >
                <span style={{ fontSize: "19px" }}>Sign In</span>
              </button>
            </div>
          </form>
          <div className="login-register">
            <h2 style={{ fontSize: "16px" }}>
              Need an account
              <Link
                to="/Register"
                style={{
                  textDecoration: "none",
                  color: "#558eff",
                  paddingLeft: 3,
                }}
              >
                Register
              </Link>
            </h2>
          </div>
          <div className="log-backtohome">
            <Link to="/" className="backToHome">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
