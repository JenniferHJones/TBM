import React, { Component } from "react";
import API from "../../utils/API";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  componentDidMount() {
    const token = localStorage.getItem("current_user_token");

    if (token) {
      API.validateToken(token)
        .then(() => this.props.history.push("/Dashboard"))
        .catch(() => localStorage.removeItem("current_user_token"));
    }
  }

  onSubmit = e => {
    e.preventDefault();

    API.login(this.state)
      .then(res => {
        localStorage.setItem("current_user_token", res.data.token);
        this.props.update(res.data);
      })
      .then(() => this.props.history.push("/Dashboard"))
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <div className="container mt-5 mb-5">
        <h1 className="mb-5">Log In</h1>
        <form>
          <div className="form-group mb-5 font-weight-bold">
            <label htmlFor="inputEmail">Email</label>
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
            <label htmlFor="inputPassword">Password</label>
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
            className="btn btn-warning mb-5"
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
