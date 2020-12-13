import React, { Component } from "react";
import JobsDataService from "../../api/job/JobsDataService.js";
import AuthenticationService from "./AuthenticationService.js";
import moment from "moment";

class ListJobsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      message : null
    };

    this.deleteJobClicked = this.deleteJobClicked.bind(this);
    this.updateJobClicked = this.updateJobClicked.bind(this);
    this.refreshJobTable = this.refreshJobTable.bind(this);
    this.addJobClicked = this.addJobClicked.bind(this);
  }

  componentDidMount() {
    this.refreshJobTable()
    console.log(this.state)
  }

  refreshJobTable(){
    let username = AuthenticationService.getLoggedInUserName();
    JobsDataService.retrieveAllJobs(username).then((response) => {
      this.setState({ jobs: response.data });
    });
  }

  deleteJobClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    JobsDataService.deleteJob(username, id).then(response => {
     this.setState({message:`deletion of job ${id} Successful`})
     this.refreshJobTable()
    })
  }

  updateJobClicked(id) {
    this.props.history.push(`/jobs/${id}`);

    // let username = AuthenticationService.getLoggedInUserName();
    // JobsDataService.deleteJob(username, id).then(response => {
    //  this.setState({message:`deletion of job ${id} Successful`})
    //  this.refreshJobTable()
    }

    addJobClicked(){
      this.props.history.push(`/jobs/-1`);
    }
  

  render() {
    return (
      <div>
        <h1>Jobs</h1>
    {this.state.message && <div className= "alert alert-success">{this.state.message}</div>}

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Link</th>
                <th>Status</th>
                <th>Date</th>
                <th>Notes</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.jobTitle}</td>
                  <td>{job.company}</td>
                  <td>{job.webLink}</td>
                  <td>{job.status}</td>
                  <td>{moment(job.appliedDate).format("YYYY-MM-DD")}</td>
                  <td>{job.notes}</td>

                  <td>
                  <button
                      className="btn btn-success"
                      onClick={() => this.updateJobClicked(job.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteJobClicked(job.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="row">
            <button className="btn btn-success" onClick={this.addJobClicked}>Add</button>

          </div>
        </div>
      </div>
    );
  }
}

export default ListJobsComponent;
