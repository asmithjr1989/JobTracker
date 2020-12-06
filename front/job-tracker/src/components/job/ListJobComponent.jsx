import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";

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
              </tr>
            </thead>
            <tbody>
              {this.state.jobs.map((job) => (
                <tr key={job.id}>
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
        </div>
      );
    }
  }
  
export default ListJobsComponent