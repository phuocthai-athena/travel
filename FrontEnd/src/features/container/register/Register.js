import React, { useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { message } from "antd";

import tk from "./../../images/tk.png";
import mk from "./../../images/mk.png";
import apiAccount from "../../../api/apiAccount";
import { validateEmail } from "../../../utils/helpers";

import "./dangky.css";

function Register(props) {
  const [state, setState] = useState({
    password: "",
    confirmPassword: "",
    name: "",
    status: 1,
    email: "",
  });

  const { password, confirmPassword, status, name, email } = state;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      message.warning("Email is not in correct format.!");
    } else {
      if (
        password.trim() === "" ||
        confirmPassword.trim() === "" ||
        name.trim() === "" ||
        email.trim() === ""
      ) {
        message.error("You have not entered complete information!");
      } else {
        if (password.length > 5) {
          if (password === confirmPassword) {
            if (
              (await apiAccount.checkEmail(email).then((data) => {
                return data;
              })) !== null
            ) {
              message.error("Email already in use!");
            } else {
              const UserRoles = [{ roleId: 6 }];
              apiAccount.postUser({
                name,
                status,
                email,
                password,
                UserRoles,
              });
              history.push("/login");
            }
          } else {
            message.error("Passwords do not match!");
          }
        } else {
          message.error("Password must be at least 6 characters!");
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

  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <Router>
      <div id="dangky">
        <div className="box-login">
          <form className="form" onSubmit={onSubmit}>
            <h3 className="text-uppercase text-white text-center pb-3">
              Register
            </h3>

            <div className="input-group flex-nowrap mt-3 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  <img src={tk} className="img-login float-left" alt="" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="input-group flex-nowrap mt-3 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  <img src={tk} className="img-login float-left" alt="" />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
                aria-label="Username"
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
                name="password"
                value={password}
                onChange={onChange}
                aria-label="Username"
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
                placeholder="Re-enter password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div className="form-group form-check">
              <Link onClick={handleLogin} className="float-right text-light">
                Already have an account?
              </Link>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-100 mb-4"
            >
              Register
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

Register.propTypes = {};

export default Register;
