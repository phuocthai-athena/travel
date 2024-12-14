import React, { useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { message } from "antd";

import tk from "./../../images/tk.png";
import mk from "./../../images/mk.png";
import { infoData } from "./infoSlice";
import loginApi from "../../../api/loginApi";
import { userData } from "../admin/taikhoan/taikhoanSlice";
import { validateEmail } from "../../../utils/helpers";

import "./login.css";
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "redirect",
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
function Login(props) {
  const [state, setState] = useState({ email: "", password: "" });
  const { email, password } = state;

  const history = useHistory();
  const dispatch = useDispatch();

  const actionuser = async () => {
    await dispatch(userData());
  };

  const actionInfo = async () => {
    await dispatch(infoData());
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      message.warning("Email is not in correct format!");
    } else {
      if (email.trim() === "" || password.trim() === "") {
        message.warning("You have not entered complete information!");
      } else {
        const token = await loginApi
          .login({ email: email, password: password })
          .then((data) => {
            return data;
          });
        if (token !== "err") {
          localStorage.setItem("token", token);
          actionInfo();
          message.success("Login successful!");
          history.push("/");
        } else {
          message.warning("Wrong username or password!");
        }
      }
    }
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <Router>
      <div id="login">
        <div className="box-login">
          <form className="form" onSubmit={onsubmit}>
            <h3 className="text-uppercase text-white text-center pb-3">
              Login
            </h3>
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  <img src={tk} className="img-login float-left" alt="" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                name="email"
                onChange={onChange}
                aria-label="email"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div className="input-group flex-nowrap mt-3 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  <img src={mk} className="img-login float-left" alt="" />
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                name="password"
                onChange={onChange}
                aria-label="email"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div className="form-group form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange="onclick"
                />
                <span className="text-light">Remember password</span>
              </label>
              <Link
                to="#"
                onClick={handleRegister}
                className="float-right text-light"
              >
                Don't have an account?
              </Link>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-100 mb-4"
            >
              Login
            </Button>
          </form>
          <p className="or">OR</p>
          <div className="mxh mt-3">
            <Button
              variant="contained"
              color="primary"
              className="text-capitalize mb-3"
            >
              <i className="fab fa-facebook-f mr-4"></i> Facebook
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="text-capitalize float-right mb-3 twitter"
            >
              <i className="fab fa-twitter mr-4"></i> Twitter
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="text-capitalize mb-3 google"
            >
              <i className="fab fa-google mr-4"></i> Google
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="text-capitalize instagram float-right mb-3"
            >
              <i className="fab fa-instagram mr-4"></i> Instagram
            </Button>
          </div>
        </div>
      </div>
    </Router>
  );
}

Login.propTypes = {};

export default Login;
