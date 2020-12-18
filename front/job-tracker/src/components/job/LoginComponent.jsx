import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";


class LoginComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "jobTracker",
        password: "",
        hasLoginFailed: false,
        showSuccessfulMessage: false,
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.loginClicked = this.loginClicked.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    loginClicked() {
      // if (
      //   this.state.username === 'asmithjr' &&
      //   this.state.password === 'dummy'
      // ) {
      //   AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
      //   this.props.history.push(`/welcome/${this.state.username}`);
      // } else {
      //   this.setState({ showSuccessfulMessage: false });
      //   this.setState({ hasLoginFailed: true });
      // }

      AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password).then(
        () => {
          AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
          this.props.history.push(`/welcome/${this.state.username}`);
        }
      ).catch( 
        () =>{
          this.setState({ showSuccessfulMessage: false });
          this.setState({ hasLoginFailed: true });
        }

      )
    }
  
    render() {
      return (
        <div>
          <h1>Login</h1>
          <div className="container"> </div>
          {this.state.showSuccessfulMessage && <div>Login Successful</div>}
          {this.state.hasLoginFailed && 
            <div className="alert alert-warning">Invalid Credentials</div>
          }
          UserName:{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      );
    }
  }
  
  export default LoginComponent