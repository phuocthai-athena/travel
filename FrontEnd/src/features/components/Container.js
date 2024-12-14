import React, { Component } from "react";
import { connect } from "npm i react-reduxx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dangky from "../container/register/Register";
import Login from "../container/login/Login";
import Home from "./Home";

export class Container extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Dangky />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
