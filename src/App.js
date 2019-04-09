import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Auth } from "aws-amplify";

import "./App.scss";
import Routes from "./Routes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    } catch (err) {
      if (err !== "No current user") {
        alert(err);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      !this.state.isAuthenticating && (
        <div className="App">
          <Navbar isAuthenticated={this.state.isAuthenticated} />
          <div className="container">
            {/* <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} /> */}
            <Routes childProps={childProps} />
          </div>
          <Footer />
        </div>
      )
    );
  }
}

export default App;
