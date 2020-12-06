import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import { Link } from "react-router-dom";
import { withRouter} from 'react-router'


class HeaderComponent extends Component {
  
  
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log(isUserLoggedIn);
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a>jobTracker</a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-link">
              {isUserLoggedIn && <Link to="/welcome/asmithjr">Home</Link>}
            </li>
            <li className="nav-link">
              {isUserLoggedIn && <Link to="/jobs">Applications</Link>}
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li className="nav-link">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-link">
              <Link to="/logout" onClick={AuthenticationService.logout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

}



export default withRouter(HeaderComponent);
