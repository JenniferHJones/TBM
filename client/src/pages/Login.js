import React, { Component } from "react";

import API from "../utils/API";
// import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    const token = localStorage.getItem("current_customer_token");
  }

  onSubmit = e => {
    API.login(this.state)
      .then(res =>
        localStorage.setItem("current_customer_token", res.data.token)
      )
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <div className="container mt-5 mb-5">
        <h1 className="mb-5">Log In</h1>
        <form>
          <div className="form-group mb-5 font-weight-bold">
            <label for="inputEmail">Email</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              value={this.state.email}
              label="email"
              onChange={this.onChange("email")}
            />
          </div>
          <div className="form-group mb-5 font-weight-bold">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              aria-describedby="passwordHelp"
              placeholder="Enter Password"
              value={this.state.password}
              label="password"
              onChange={this.onChange("password")}
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger mb-5"
            onClick={this.onSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
