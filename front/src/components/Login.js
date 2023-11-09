import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("incorrect Username or Password");
          }
        })
        .catch((e) => {
          alert("wrong details");
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
                Hey, <br />
                Welcome Back!
              </div>
              <p className="text-wrapper">We are very happy to see you back!</p>
            </div>

            <div className="frame-wrapper">
              <div className="frame-3">
                <div className="frame-4">
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
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Password"
                      className="input-style"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-10">
              <input className="submit-button" type="submit" onClick={submit} />
            </div>
          </div>
          <p className="don-t-have-account">
            <span className="span">Don’t have account?</span>
            <span className="text-wrapper-4">
              {" "}
              <Link to="/signup">Signup Page</Link>
            </span>
          </p>
        </div>
      
    </form>
  );
}

export default Login;
