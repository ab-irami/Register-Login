import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const loggedIn = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/app/login", loggedIn)
      .then((res) => {
        if (res.data.message === "Successful Login") {
          window.location.href = "/success";
        } else {
          window.location.href = "/login";
        }
      })
      .catch((err) => console.log(err));

    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row justify-content-center my-5">
          <div className="col-6 col-md-8 col-sm-12">
            <form onSubmit={this.onSubmit}>
              <input
                type="email"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group mb-3"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group mb-3"
              />
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
