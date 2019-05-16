import React, { Component } from "react";
import API from "../../utils/API";
import "./register.css";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    userType: "",
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

    if (this.validation()) {
      return API.register(this.state)
        .then(res => {
          this.props.update(res.data);
          console.log("running?");
          console.log(this.props);
          localStorage.setItem("current_user_token", res.data.token);
          this.props.history.push("/Dashboard");
        })
        .catch(err => this.setState({ error: "DuplicateEmail" }));
    }
  };

  validation = () => {
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(this.state.email)) {
      this.setState({ error: "EmailFormat" });
      return false;
    }
    if (this.state.password.length < 4) {
      this.setState({ error: "PasswordLength" });
      return false;
    }
    return true;
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <div className="container mt-5 mb-5">
        <h1 className="mb-5">Register</h1>
        <p className="regRequired">All fields are required.</p>
        <form>
          <div className="form-group mb-5 font-weight-bold">
            <label htmlFor="inputFirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="nameHelp"
              placeholder="Enter First Name"
              value={this.state.firstName}
              label="firstName"
              onChange={this.onChange("firstName")}
            />
          </div>
          <div className="form-group mb-5 font-weight-bold">
            <label htmlFor="inputLastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="nameHelp"
              placeholder="Enter Last Name"
              value={this.state.lastName}
              label="lastName"
              onChange={this.onChange("lastName")}
            />
          </div>
          <div
            className="form-check form-check-inline mb-5"
            aria-describedby="userHelp"
          >
            <label htmlFor="userType" className="font-weight-bold mr-5">
              User Type:
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="landlord"
              id="landlord"
              value={this.state.userType}
              onChange={this.onChange("userType")}
              checked
            />
            <label className="form-check-label mr-5" htmlFor="exampleRadios1">
              Landlord
            </label>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="tenant"
                id="tenant"
                value={this.state.userType}
                onChange={this.onChange("userType")}
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Tenant
              </label>
            </div>
          </div>
          <div className="form-group mb-5 font-weight-bold">
            <label htmlFor="inputEmail">
              Email{" "}
              {this.state.error === "DuplicateEmail" ? (
                <span className="form-error">
                  (Email already registered; please log in)
                </span>
              ) : (
                <></>
              )}
              {this.state.error === "EmailFormat" ? (
                <span className="form-error">(Bad email format)</span>
              ) : (
                <></>
              )}
            </label>
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
            <label htmlFor="inputPassword">
              Password{" "}
              {this.state.error === "PasswordLength" ? (
                <span className="form-error">
                  (Must be at least 4 characters)
                </span>
              ) : (
                <></>
              )}
            </label>
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
            disabled={
              !this.state.firstName ||
              !this.state.lastName ||
              !this.state.email ||
              !this.state.password
            }
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
