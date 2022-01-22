import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

class Home extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Welcome Home!!</h1>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/signup">SignUp</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
