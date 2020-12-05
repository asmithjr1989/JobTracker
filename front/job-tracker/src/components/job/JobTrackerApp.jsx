//GITHUB PUSH TEST
 
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
            <Route path="/logout" component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
          <div>
            <a>jobTracker</a>
          </div>
          <ul className="navbar-nav" >
            <li className="nav-link"><Link to="/welcome/asmithjr">Home</Link></li>
            <li className="nav-link"><Link to="/jobs">Applications</Link></li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li className="nav-link"><Link to="/login">Login</Link></li>
            <li className="nav-link"><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
     <footer className="footer">
       <span className="text-muted">the world is yours</span>
     </footer>
    );
  }
}

class LogoutComponent extends Component {
  render(){
    return (
      <div>
        <h1>Good Bye "wave emoji"</h1>
        <div className="container">
          Happy Hunting
        </div>
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
          jobTitle: "Fullstack Developer",
          company: "Apple",
          link: "www.apple.com",
          status: "Following",
          date: new Date(),
          notes: "you can do it",
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
              <th>Job Title</th>
              <th>Company</th>
              <th>Link</th>
              <th>Status</th>
              <th>Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.jobs.map((job) => (
              <tr>
                <td>{job.id}</td>
                <td>{job.jobTitle}</td>
                <td>{job.company}</td>
                <td>{job.link}</td>
                <td>{job.status}</td>
                <td>{job.date.toString()}</td>
                <td>{job.notes}</td>
                <td></td>
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
