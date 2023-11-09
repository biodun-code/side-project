import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Check if passwords match
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Check if passwords match
    setPasswordMatch(password === e.target.value);
  };

  async function submit(e) {
    e.preventDefault();

    try {
      // Check if passwords match before submitting
      if (!passwordMatch) {
        alert("Passwords do not match");
        return;
      }

      await axios.post("http://localhost:8000/signup", {
        email,
        password,
      })
      .then((res) => {
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history("/home", { state: { id: email } });
        }
      })
      .catch((e) => {
        alert("Wrong details");
        console.log(e);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form className="COMMIT-login-page" action="POST">
      <div className="div">
        <div className="overlap-group"></div>
        <div className="frame">
          <div className="frame-2">
            <div className="hey-welcome-back">
              Hey there, <br />
              Welcome aboard!
            </div>
            <p className="text-wrapper">We're thrilled to have you join us!</p>
          </div>

          <div className="frame-wrapper">
            <div className="frame-3">
              <div className="frame-4">
                <div className="frame-5">
                  <div className="text-wrapper-2">Email</div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-style"
                  />
                </div>
                <div className="frame-5">
                  <div className="text-wrapper-2">Username</div>
                  <input
                    type="name"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Username"
                    className="input-style"
                  />
                </div>
                <div className="frame-5">
                  <div className="text-wrapper-2">Password</div>
                  <input
                    type="password"
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    className={`input-style ${!passwordMatch ? 'password-mismatch' : ''}`}
                  />
                </div>
                <div className="frame-5">
                  <div className="text-wrapper-2">Confirm Password</div>
                  <input
                    type="password"
                    onChange={handleConfirmPasswordChange}
                    placeholder="Password"
                    className={`input-style ${!passwordMatch ? 'password-mismatch' : ''}`}
                  />
                  {!passwordMatch && (
                    <p className="password-mismatch-text">Passwords do not match.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="frame-10">
            <input className="submit-button" type="submit" onClick={submit} />
          </div>
        </div>
        <p className="don-t-have-account">
          <span className="span">Already have an account?</span>
          <span className="text-wrapper-4">
            {" "}
            <Link to="/">Login Page</Link>
          </span>
        </p>
      </div>
    </form>
  );
}

export default Login;
