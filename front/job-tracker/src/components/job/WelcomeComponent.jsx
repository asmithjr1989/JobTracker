import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/job/HelloWorldService.js";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this)
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
    // HelloWorldService.executeHelloWorldBeanService().then(response => this.handleSuccessfulResponse(response))

    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.match.params.name
    ).then((response) => this.handleSuccessfulResponse(response))
    .catch(error => this.handleError(error))
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.setState({ welcomeMessage: response.data.message });
  }

  handleError(error){
    console.log(error.response)
    let errorMessage = '';

    if(error.message)
      errorMessage += error.message
    

    if(error.response && error.response.data){
      errorMessage += error.response.data.message
    }

    this.setState({welcomeMessage: errorMessage})
  }
}
export default WelcomeComponent;
