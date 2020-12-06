import React, {Component} from 'react'
import { Link } from "react-router-dom";


class WelcomeComponent extends Component {
    render() {
      return (
        <div>
          <h1>Welcome!</h1>
          <div className="container">
            Welcome {this.props.match.params.name}, To Job Application Tracker.
            You can manage your jobs <Link to="/jobs">here</Link>
          </div>
        </div>
      );
    }
  }

export default WelcomeComponent