import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class JobTrackerApp extends Component {
  render() {
    return (
      <div className="JobTrackerApp">
        <Router>
        <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/welcome/:name" component={WelcomeComponent} />
            <Route path="/jobs" component={ListJobsComponent} />
            <Route component={ErrorComponent} />
          </Switch>
        <FooterComponent />  
        </Router>
      </div>
    );
  }
}

class HeaderComponent extends Component{
    render(){
        return(
            <div>
                Header <hr/>
            </div>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <div>
               <hr/> Footer
            </div>
        )
    }
}



class ListJobsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          id: 1,
          description: "Fullstack Developer",
          status: "Following",
          date: new Date(),
        },
        { 
          id: 2, 
          description: "IT Support", 
          status: "Following",
          date: new Date() },
        {
          id: 3,
          description: "Japanese Translator",
          status: "Following",
          date: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Jobs</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.jobs.map((job) => (
              <tr>
                <td>{job.id}</td>
                <td>{job.description}</td>
                <td>{job.status}</td>
                <td>{job.date.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Welcome {this.props.match.params.name}, To Job Application Tracker. You
        can manage your jobs <Link to="/jobs">here</Link>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>I think you are lost buddy</div>;
}

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
    //admin,password
    if (
      this.state.username === "asmithjr" &&
      this.state.password === "icandoit"
    ) {
      this.props.history.push(`/welcome/${this.state.username}`);
      console.log("Successful");
    } else {
      console.log("Failed");
      this.setState({ showSuccessfulMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.showSuccessfulMessage && <div>Login Successful</div>}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
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
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

export default JobTrackerApp;
