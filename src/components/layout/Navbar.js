import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  onLogout = async event => {
    await Auth.signOut();
    // this.props.userHasAuthenticated(false);
    this.setState({ isAuthenticated: false });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DevPals {this.props.isAuthenticated}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  Developers
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li> */}
              {this.props.isAuthenticated ? (
                <li className="nav-item">
                  <a className="nav-link" onClick={this.onLogout}>
                    Logout
                  </a>
                </li>
              ) : (
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
