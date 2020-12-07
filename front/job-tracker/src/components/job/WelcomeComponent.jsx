import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/job/HelloWorldService.js";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);

    this.state = {
      welcomeMessage: "",
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>

        <div className="container">
          Welcome {this.props.match.params.name}, To Job Application Tracker.
          You can manage your jobs <Link to="/jobs">here</Link>
        </div>

        <div className="container">
          Click here for a customized welcome message.
          <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success"
          >
            Get Message
          </button>
        </div>

        <div className="container">{this.state.welcomeMessage}</div>
      </div>
    );
  }

  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldService()
    .then((response) => this.handleSuccessfulResponse(response))
  }

  handleSuccessfulResponse(response) {
    this.setState({ welcomeMessage: response.data });
  }
}
export default WelcomeComponent;
