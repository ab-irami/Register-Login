import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    }

    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeEmail(event) {
      this.setState({
          email: event.target.value
      })
  }

  changePassword(event) {
      this.setState({
          password: event.target.value
      })
  }

  onSubmit(event) {
      event.preventDefault()

      const loggedIn = {
          email: this.state.email,
          password: this.state.password
      }

      axios.post("http://localhost:4000/app/login", loggedIn)
      .then(res => console.log(res.data))

      this.setState({
          email: "",
          password: ""
      })
  }

  render() {
    return (
      <div className="container">
        <div className="form-div">
          <form onSubmit={this.onSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={this.changeEmail}
              value={this.state.email}
              className="form-control form-group"
            />

            <input
              type="password"
              placeholder="Password"
              onChange={this.changePassword}
              value={this.state.password}
              className="form-control form-group"
            />
            <input
              type="submit"
              className="btn btn-danger btn-block"
              value="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
